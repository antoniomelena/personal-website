import "./scss/style.scss";

const header = document.querySelector(".main-header");
const sectionOne = document.querySelector(".container");

// window.addEventListener("scroll", () => {
//   const scrollPos = window.scrollY;
//   if (scrollPos > 10) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

const sectionOneOptions = { rootMargin: "-200px 0px 0px 0px" };

const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  },
  sectionOneOptions
);

sectionOneObserver.observe(sectionOne);
