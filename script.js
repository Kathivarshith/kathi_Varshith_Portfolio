// ============================================
//   Kathi Varshith – Portfolio Scripts
//   Add new JS interactions here
// ============================================

document.querySelectorAll("a[href^="mailto:"]").forEach(function(a){
  a.addEventListener("click",function(e){
    e.preventDefault();
    window.open(a.href,"_blank");
  });
});

// ── Smooth active nav highlight ──
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute("id");
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute("href") === "#" + current ? "var(--text)" : "";
  });
});

// ── Fade-in on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".skill-card, .project-card, .exp-card, .cert-card, .stat-box").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});
