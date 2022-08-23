import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
    taskToRemind: null,
    reminder: false,
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

    //bring an individual task from backend and return it
    // async fetchTasks(id) {
    //   const { data, error } = await supabase
    //     .from("tasks")
    //     .select("*, tasks!inner(*)")
    //     .eq("tasks.id", id);

    //   // const { data: tasks } = await supabase
    //   //   .from("tasks")
    //   //   .select("*")
    //   //   .order("id", { ascending: false });
    //   this.taskToRemind = tasks;
    //   return this.tasks;
    // },

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
    },

    //delete task from supabase and update the array

    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: id });

      this.tasks = this.tasks.filter((task) => task.id !== id);
    },

    //toggle reminder

    async toggleReminder(id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ id: id })
        .match({ id: id });

        this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task);

      // const taskToToggle =  await this.fetchTask(id);
      // const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      // const res = await fetch(`api/tasks/${id}`, {
      //   method: "PUT",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(updTask),
      // });

      // const data = await res.json();

      // this.tasks = this.tasks.map((task) =>
      //   task.id === id ? { ...task, reminder: !data.reminder } : task
      // );
    },
  },
});
