import { defineStore } from "pinia";

export const useThemesStore = defineStore("themes", {
  state: () => ({
    chosenTheme: {},
    themes: [
      {
        title: "Peaceful Island",
        link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1664671112/final%20project/MOODS/4c8d3596afb21e3bd148e8b6f7ef06b8_cop_iao79o.gif",
        artist: "@paulodosreisart",
        song: "https://res.cloudinary.com/dmcofgm8p/video/upload/v1665449709/final%20project/SOUNDS/gorillaz___feel_good_inc___lofi_k432vf.mp3",
      },
      {
        title: "Tropical Night",
        link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1664318407/final%20project/MOODS/86d75a902dda5a4c6ac4b95d8a5afba4_s0nqp5.gif",
        artist: "@setamo.pixel",
        song: "https://res.cloudinary.com/dmcofgm8p/video/upload/v1665453143/final%20project/SOUNDS/victory_celebration___lofi_bedogh.mp3",
      },
      {
        title: "Fall Sunset",
        link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1664315183/final%20project/MOODS/c6a1c9f91f82c3fe5af6c5d83cc0bf7e_qn8sz0.gif",
        artist: "@vaneella",
        song: "https://res.cloudinary.com/dmcofgm8p/video/upload/v1665452624/final%20project/SOUNDS/naruto___sadness_and_sorrow___lofi_tskqct.mp3",
      },
      {
        title: "Cherry blossom",
        link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1664315182/final%20project/MOODS/f533b100c0b5d3bef97d4c075f12066a_cuodcp.gif",
        artist: "@ghibli",
        song: "https://res.cloudinary.com/dmcofgm8p/video/upload/v1665452333/final%20project/SOUNDS/the_name_of_life___spirited_away_lofi_pyazwa.mp3",
      },
      {
        title: "Late Night",
        link: "https://res.cloudinary.com/dmcofgm8p/image/upload/v1664672299/final%20project/MOODS/38d30ecfe41c21551c043443d330d6372222_seoeh5.gif",
        artist: "@pixeljeff_design",
        song: "https://res.cloudinary.com/dmcofgm8p/video/upload/v1665452657/final%20project/SOUNDS/kingdom_hearts___dearly_beloved___lofi_e9elt4.mp3",
      },
    ],
    defaultBg:
      "background-image: url(https://res.cloudinary.com/dmcofgm8p/image/upload/v1661506013/final%20project/97e7c21b1e9ba1725b150f6b40c2192c55555new_juhasf.gif);",
    moodChoice: false,
    linkBgToggle: false,
    audioFile: "",
	soundToggle: true,
  }),
  actions: {
    setTheme(theme) {
      this.linkBgToggle = true;
      this.chosenTheme = theme;
      this.chosenTheme.linkBg =
        "background-image: url(" + this.chosenTheme.link + ");";
      if(this.audioFile){
       	this.audioFile.pause();
       	this.audioFile.currentTime = 0;
         }
      this.audioFile = new Audio(this.chosenTheme.song);
      this.audioFile.loop = true;
      this.audioFile.volume = 0.05;
      this.audioFile.play();
    },

    showPomodoro() {
      this.moodChoice = !this.moodChoice;
    },

	stopMusic(){
	  this.audioFile.pause();
	  this.audioFile.currentTime = 0;
	},

	mute(){
		this.audioFile.pause();
		this.soundToggle = false;
	},

	unmute(){
		this.audioFile.play();
		this.soundToggle = true;
	}
  },
});
