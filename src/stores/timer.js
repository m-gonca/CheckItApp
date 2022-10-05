import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", {
  state: () => ({
    timer: {
		type: "pomodoro",
		name: "Pomodoro",
		min: 25,
		back: 25,
		sec: 0,
	},
  }),
  actions: {
    setTimer(type) {
      if (type === "pomodoro") {
        this.timer = {
          type: "pomodoro",
          name: "Pomodoro",
          min: 25,
          back: 25,
        };
      } else if (type === "shortBreak") {
        this.timer = {
          type: "shortBreak",
          name: "Short Break",
          min: 5,
          back: 5,
        };
      } else if (type === "longBreak") {
        this.timer = {
          type: "longBreak",
          name: "Long Break",
          min: 15,
          back: 15,
        };
      }
    },

    startTimer() {
      setInterval(this.countDown, 1000);
    },

    stopTimer() {
      clearInterval(setInterval(this.countDown, 1000));
    },

    countDown() {
      this.timer.sec--;
      if (this.timer.sec < 0) {
        this.timer.sec = 59;
        this.timer.min--;
      }
    },
  },
});
