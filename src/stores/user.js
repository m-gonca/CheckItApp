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
        console.log(this.user);
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
        console.log(this.user);
      }
    },

    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },

    async getProfile() {
        const user = await supabase.auth.user();

        const { data, error, status } = await supabase
          .from("profiles")
          .select(`username, name, surname, avatar_url`)
          .eq("id", user.id)
          .single();

        if (error && status !== 406) throw error;
        console.log(data);
        if (data) {
          this.user.username = data.username;
          this.user.name = data.name;
          this.user.surname = data.surname;
          this.user.avatar_url = data.avatar_url;
        }
        console.log("prueba dentro de la tienda");
        console.log(this.user);
    },

    async updateProfile(updateObject) {
        const user = await supabase.auth.user();

        updateObject.id = user.id;
        updateObject.updated_at = new Date();

        const { error } = await supabase.from("profiles").upsert(updateObject, {
          returning: "minimal",
        });
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
