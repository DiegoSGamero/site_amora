import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="heritage"
export default class extends Controller {
  connect() {
    console.log("connected");

    const buttons = this.element.querySelectorAll(".heritage-topics .btn");
    const sections = this.element.querySelectorAll(".heri-box > div");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        sections[index].scrollIntoView({ behavior: "smooth" });
      });
    });
  }
}
