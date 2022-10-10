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
      showSettings: false,
      autoBreak: true,
      audioFile: new Audio('https://res.cloudinary.com/dmcofgm8p/video/upload/v1665349812/final%20project/SOUNDS/harp-motif2-36586_gt210a.mp3'),
      audioFile2: new Audio('https://res.cloudinary.com/dmcofgm8p/video/upload/v1665357005/final%20project/SOUNDS/winfantasia-6912_emrkzj.mp3'),
    },
  }),
  actions: {
    setTimer(type) {
      if (type === 'pomodoro') {
        console.log("entro aqui");
        this.timer.type = 'pomodoro';
        this.timer.name = 'Pomodoro';
        this.timer.min = 25;
        this.timer.formatMin = '25';
        this.timer.sec = 0;
        this.timer.formatSec = '00';
        }
      else if (type === 'shortBreak') {
        this.timer.type = 'shortBreak';
        this.timer.name = 'Short Break';
        this.timer.min = 5;
        this.timer.formatMin = '05';
        this.timer.sec = 0;
        this.timer.formatSec = '00';
        }
      else if (type === 'longBreak') {
        this.timer.type = 'longBreak';
        this.timer.name = 'Long Break';
        this.timer.min = 15;
        this.timer.formatMin = '15';
        this.timer.sec = 0;
        this.timer.formatSec = '00';
        };
    },

    startTimer(){
      this.timer.start = setInterval(this.countDown, 1000);
    },

    stopTimer() {
      this.timer.start = clearInterval(this.timer.start);
    },

    resetTimer() {
      this.stopTimer();
      this.setTimer(this.timer.type);
    },

    
    countDown() {
      this.timer.sec--;
      if (this.timer.min === 0 && this.timer.sec === 0) {
        if(this.timer.autoBreak === true && this.timer.type === 'pomodoro'){
          this.timer.audioFile.play();
          this.setTimer('shortBreak');
          this.startTimer();
        }
        else if(this.timer.autoBreak === true && this.timer.type === 'shortBreak'){
          console.log("entro aqui 2");
          this.timer.audioFile2.play();
          this.setTimer('pomodoro');
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
