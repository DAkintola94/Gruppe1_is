document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // remove active from all links
          navLinks.forEach(link => link.classList.remove("active"));
          // add active to the matching one
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.nav-item[href="#${id}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.5 } // section is "active" if 50% visible
  );

  sections.forEach(section => observer.observe(section));
});