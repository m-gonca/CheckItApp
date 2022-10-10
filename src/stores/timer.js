import { defineStore } from "pinia";

export const useTimerStore = defineStore("timer", {
  state: () => ({
    timer: {
      type: "pomodoro",
      name: "Pomodoro",
      min: 25,
      sec: 0,
      formatMin: "25",
      formatSec: "00",
      counter: 0,
      showSettings: false,
      autoBreak: true,
      audioFile: new Audio(
        "https://res.cloudinary.com/dmcofgm8p/video/upload/v1665349812/final%20project/SOUNDS/harp-motif2-36586_gt210a.mp3"
      ),
      audioFile2: new Audio(
        "https://res.cloudinary.com/dmcofgm8p/video/upload/v1665357005/final%20project/SOUNDS/winfantasia-6912_emrkzj.mp3"
      ),
      audioFile3: new Audio(
        "https://res.cloudinary.com/dmcofgm8p/video/upload/v1665361118/final%20project/SOUNDS/dream-memory-alarm-clock-109567_a5ybgw.mp3"
      ),
    },
  }),
  actions: {
    setTimer(type) {
      if (type === "pomodoro") {
        this.timer.type = "pomodoro";
        this.timer.name = "Pomodoro";
        this.timer.min = 1;
        this.timer.formatMin = "25";
        this.timer.sec = 0;
        this.timer.formatSec = "00";
      } else if (type === "shortBreak") {
        this.timer.type = "shortBreak";
        this.timer.name = "Short Break";
        this.timer.min = 1;
        this.timer.formatMin = "05";
        this.timer.sec = 0;
        this.timer.formatSec = "00";
      } else if (type === "longBreak") {
        this.timer.type = "longBreak";
        this.timer.name = "Long Break";
        this.timer.min = 1;
        this.timer.formatMin = "20";
        this.timer.sec = 0;
        this.timer.formatSec = "00";
      }
    },

    startTimer() {
      this.timer.start = setInterval(this.countDown, 1000);
    },

    stopTimer() {
      this.timer.start = clearInterval(this.timer.start);
    },

    resetTimer() {
      this.stopTimer();
      this.stopAlarms();
      this.setTimer(this.timer.type);
    },

    stopAlarms() {
      this.timer.audioFile.pause();
      this.timer.audioFile.currentTime = 0;
      this.timer.audioFile2.pause();
      this.timer.audioFile2.currentTime = 0;
      this.timer.audioFile3.pause();
      this.timer.audioFile3.currentTime = 0;
    },

    countDown() {
      this.timer.sec--;
      if (this.timer.min === 0 && this.timer.sec === 0) {
        this.stopTimer();
        if (this.timer.autoBreak === true && this.timer.type === "pomodoro") {
          this.timer.counter++;
          if (this.timer.autoBreak === true && this.timer.counter === 4) {
            console.log("long break");
            this.timer.audioFile3.play();
            this.timer.counter = 0;
            this.setTimer("longBreak");
            this.startTimer();
          }
          else{
            console.log("short break");
            this.timer.audioFile.play();
            this.setTimer("shortBreak");
            this.startTimer();
          }
        } else if (
          this.timer.autoBreak === true &&
        (this.timer.type === "shortBreak" || this.timer.type === "longBreak")
        ) {
          console.log("pomodoro start");
          this.timer.audioFile2.play();
          this.setTimer("pomodoro");
          this.startTimer();
        }
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
