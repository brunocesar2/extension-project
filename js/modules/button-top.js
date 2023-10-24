export default function initButtonTop() {
  const button = document.querySelector("[data-buttonTop]");
  if (button) {
    ["touchstart", "click"].forEach((userEvent) => {
      button.addEventListener(userEvent, handleButton);
    });
    function handleButton() {
      window.scrollTo(0, 0);
    }
    window.addEventListener("scroll", hideButton);
    function hideButton() {
      return window.scrollY < 10
        ? (button.style.display = "none")
        : (button.style.display = "block");
    }
  }
}
