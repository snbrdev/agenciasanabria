// agenciasanabria.com
// Todos los derechos reservados.

document.addEventListener("DOMContentLoaded", () => {
  // ===== MOBILE NAV TOGGLE =====
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  if(navToggle){
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });
  }

  document.querySelectorAll(".nav__links a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });

  // ===== CONTACT FORM -> WHATSAPP =====
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("fieldName").value.trim();
      const company = document.getElementById("fieldCompany").value.trim();
      const message = document.getElementById("fieldMessage").value.trim();

      const companyLine = company ? ` de ${company}` : "";
      const text = `Hola Agencia Sanabria, soy ${name}${companyLine}. ${message}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=595974429770&text=${encodeURIComponent(text)}`;

      window.open(whatsappUrl, "_blank");
    });
  }
});
