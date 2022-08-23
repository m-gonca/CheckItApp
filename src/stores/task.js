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
    //bring all tasks from backend and put them in the tasks 
    //array this function will have to be called in home to be 
    //shown in the front

    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },

    //add a task to backend supabase and add it to the tasks array
    //this only updates the table in supabase, to show the new item
    //we have to fetch it in home again

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
    //with a filter method that creates a copy of the array
    //with all the tasks whose id doesnt match the one we want to delete

    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: id });

      this.tasks = this.tasks.filter((task) => task.id !== id);
    },

    //update to true the is_complete key from the task in supabase
    //and update with a map method the task array. We do this by looking
    //for the matching id (if it doesnt match, it leaves the 
    //task the same as before) and if it matches, it changes the key 
    //to true through data.is_complete 

    async updateTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: true })
        .match({ id: id });

        this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, is_complete: !data.is_complete } : task);
    },
  },
});
