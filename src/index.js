import "./scss/style.scss";

const header = document.querySelector(".main-header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = { rootMargin: "-100px 0px 0px 0px" };

const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  },
  sectionOneOptions
);

sectionOneObserver.observe(sectionOne);
