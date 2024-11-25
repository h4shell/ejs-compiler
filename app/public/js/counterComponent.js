function counterComponent(value) {
  return {
    count: value.min,
    max: value.max,
    min: value.min,
    increment($event) {
      const counter = $event.target.parentElement;
      if (this.count < this.max) {
        this.count++;
        counter.querySelectorAll("button")[1].classList.remove("opacity-50");
        if (this.count === this.max) {
          $event.target.classList.add("opacity-50");
        }
      }
    },
    decrement($event) {
      const counter = $event.target.parentElement.parentElement;
      if (this.count > this.min) {
        this.count--;
        counter.querySelectorAll("button")[0].classList.remove("opacity-50");
        if (this.count === this.min) {
          $event.target.classList.add("opacity-50");
        }
      }
    },
  };
}
