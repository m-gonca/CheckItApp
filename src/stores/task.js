import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    //bring all tasks from backend and put them in the tasks array

    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },

    //add a task to backend supabase and add it to the tasks array

    async addTask(title, description) {
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
          description: description,
        },
      ]);

      // console.log("HE AÑADIDO ARGO");
      // console.log(tasks);
    },

    //delete task

    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ user_id: id });

      this.tasks = this.tasks.filter((task) => task.user_id !== id);

      res.status === 200
        ? (this.task = this.task.filter((task) => task.user_id !== id))
        : alert("there's an error");
    },
  },
});
