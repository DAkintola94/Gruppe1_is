document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-item");

  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;

  if(currentPath.includes('task.html')){
    navLinks.forEach(link => link.classList.remove("active"));
    const taskLink = document.querySelector('.nav-item[href="#taskSection"]');
    if (taskLink) taskLink.classList.add("active");
    return; // Exit early, no need to observe
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // remove active from all links
          navLinks.forEach(link => link.classList.remove("active"));
          // add active to the matching one
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.nav-item[href="#${id}"]`);
          console.log(activeLink, "Hello there");
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.5 } // section is "active" if 50% visible
  );

  sections.forEach(section => observer.observe(section));
});