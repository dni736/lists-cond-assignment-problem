Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredValue: "",
      toggle: true,
      caption: "Hide",
    };
  },
  methods: {
    addTask() {
      if (this.enteredValue) {
        this.tasks.push(this.enteredValue);
        this.enteredValue = "";
      } else alert("State your task");
    },
    hideOrShow() {
      this.toggle = !this.toggle;
      this.caption == "Hide"
        ? (this.caption = "Show")
        : (this.caption = "Hide");
    },
  },
}).mount("#assignment");
