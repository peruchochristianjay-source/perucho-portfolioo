document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  function showSection(id) {
    sections.forEach(sec => sec.classList.remove("active"));
    document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));

    document.getElementById(id).classList.add("active");
    document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });
  showSection("home");
});

function toggleMode() {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
}
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

const img = document.createElement("img");
lightbox.appendChild(img);

const closeBtn = document.createElement("span");
closeBtn.classList.add("close");
closeBtn.innerHTML = "&times;";
lightbox.appendChild(closeBtn);

document.querySelectorAll(".activity-card img").forEach(image => {
  image.addEventListener("click", () => {
    lightbox.style.display = "flex";
    img.src = image.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== img) {
    lightbox.style.display = "none";
  }
});
