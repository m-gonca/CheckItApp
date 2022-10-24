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
    pomodoro: {
      type: "pomodoro",
      name: "Pomodoro",
      min: 25,
      sec: 0,
      formatMin: "25",
      formatSec: "00",
    },
    shortBreak: {
      type: "shortBreak",
      name: "Short Break",
      min: 5,
      sec: 0,
      formatMin: "05",
      formatSec: "00",
    },
    longBreak: {
      type: "longBreak",
      name: "Long Break",
      min: 20,
      sec: 0,
      formatMin: "20",
      formatSec: "00",
    },
  }),
  actions: {
    setTimer(type) {
      if (type === "pomodoro") {
        console.log("set timer pomodoro");
        this.timer.type = this.pomodoro.type;
        this.timer.name = this.pomodoro.name;
        this.timer.min = this.pomodoro.min;
        this.timer.formatMin = this.pomodoro.formatMin;
        this.timer.sec = this.pomodoro.sec;
        this.timer.formatSec = this.pomodoro.formatSec;
      } else if (type === "shortBreak") {
        console.log("set timer shortbreak");
        this.timer.type = this.shortBreak.type;
        this.timer.name = this.shortBreak.name;
        this.timer.min = this.shortBreak.min;
        this.timer.formatMin = this.shortBreak.formatMin;
        this.timer.sec = this.shortBreak.sec;
        this.timer.formatSec = this.shortBreak.formatSec;
      } else if (type === "longBreak") {
        console.log("set timer longbreak");
        this.timer.type = this.longBreak.type;
        this.timer.name = this.longBreak.name;
        this.timer.min = this.longBreak.min;
        this.timer.formatMin = this.longBreak.formatMin;
        this.timer.sec = this.longBreak.sec;
        this.timer.formatSec = this.longBreak.formatSec;
      }
    },

    updateTimer() {
      this.pomodoro.formatMin = this.pomodoro.min.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });
      this.shortBreak.formatMin = this.shortBreak.min.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });
      this.longBreak.formatMin = this.longBreak.min.toLocaleString(undefined, {
        minimumIntegerDigits: 2,
      });
      this.setTimer(this.timer.type);
    },

    startTimer() {
      if (!(this.timer.min === 0 && this.timer.sec === 0)) {
        this.timer.playDisabled = true;
        this.timer.start = setInterval(this.countDown, 1000);
      }
    },

    stopTimer() {
      this.timer.playDisabled = false;
      this.timer.start = clearInterval(this.timer.start);
    },

    resetTimer() {
      this.timer.playDisabled = false;
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
          } else {
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
