// This will be code that allows the menu to transition from the top of the page and move while scrolling.


const header = document.querySelector("header");
const sectionOne = document.querySelector(".main-name, .main-name-about");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      console.log(entry.target);
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);

sectionOneObserver.observe(sectionOne);