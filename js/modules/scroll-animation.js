export default function initScrollAnimation() {
  const section = document.querySelectorAll("[data-scroll-animation]");
  if (section.length) {
    const screenHalf = window.innerHeight * 0.6;
    window.addEventListener("scroll", showSection);
    function showSection() {
      section.forEach((sections) => {
        const sectionIsVisible =
          sections.getBoundingClientRect().top - screenHalf < 0;
        sections.classList.toggle("active", sectionIsVisible);
      });
    }
  }
}
