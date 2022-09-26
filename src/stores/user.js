import { defineStore } from "pinia";
import { supabase } from "../supabase";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
      const { data, error, status } = await supabase
          .from("profiles")
          .select(`username, name, surname, avatar_url`)
          .eq("id", user.id)
          .single();
      if (error && status !== 406) throw error;
      if (data) {
          this.user.username = data.username;
          this.user.name = data.name;
          this.user.surname = data.surname;
          this.user.avatar_url = data.avatar_url;
          this.downloadImage(data.avatar_url);
      }
      return this.user;
    },

    async downloadImage (path) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) throw error;
        if (data) {
          this.user.avatar_url_temp = URL.createObjectURL(data);
        }
      } catch (error) {
        console.error("Error downloading image: ", error.message);
      }
    },

    async updateProfile(updateObject) {
      const user = await supabase.auth.user();

      updateObject.id = user.id;
      updateObject.updated_at = new Date();

      const { error } = await supabase.from("profiles").upsert(updateObject, {
        returning: "minimal",
      });
      console.log("previous username", this.user.username);
      if(updateObject.username)
      {this.user.username = updateObject.username;}
      console.log("new username", this.user.username);
      if(updateObject.name)
      {this.user.name = updateObject.name;}
      if(updateObject.surname)
      {this.user.surname = updateObject.surname;}
      return this.user;
  },

    async signUp(email, password, username) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      },
      {
        data: { 
          username: username,
        }
    });
      if (error) throw error;
      if (user) {
        this.user = user;
      }
    },

    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn(
        {
          email: email,
          password: password,
        },
        {
          shouldCreateUser: false,
        }
      );
      if (error) throw error;
      if (user) {
        this.user = user;
      }
    },

    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
