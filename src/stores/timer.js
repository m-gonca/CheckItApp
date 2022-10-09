import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", {
  state: () => ({
    timer: {
      type: "pomodoro",
      name: "Pomodoro",
      min: 1,
      back: 25,
      sec: 0,
      formatMin: "25",
      formatSec: "00",
      showSettings: false,
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
          formatMin:"25"
        };
      } else if (type === "shortBreak") {
        this.timer = {
          type: "shortBreak",
          name: "Short Break",
          min: 5,
          back: 5,
          formatMin:"05"
        };
      } else if (type === "longBreak") {
        this.timer = {
          type: "longBreak",
          name: "Long Break",
          min: 15,
          back: 15,
          formatMin:"15"
        };
      }
    },

    startTimer(){
      this.timer.start = setInterval(this.countDown, 1000);
    },

    stopTimer() {
      this.timer.start = clearInterval(this.timer.start);
    },

    resetTimer() {
      this.stopTimer();
      this.timer.min = this.timer.back;
      this.timer.sec = 0;
      this.timer.formatMin = this.timer.back;
      this.timer.formatSec = "00";
    },

    countDown() {
      this.timer.sec--;
      if (this.timer.min === 0 && this.timer.sec === 0) {
        this.resetTimer();
      }
      if (this.timer.sec < 0) {
        this.timer.sec = 59;
        this.timer.min--;
      } 


      this.timer.formatSec = this.timer.sec.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });
      this.timer.formatMin = this.timer.min.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });
    },
  },
});
