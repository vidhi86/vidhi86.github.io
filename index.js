/* --------------------------------------------------RESUME-DOWNLOAD------------------------------------------------------ */

document.getElementById("resume-link-1").addEventListener("click", () => {
  window.location.assign(
    "https://drive.google.com/file/d/11LSC_CpTntfSHYcNwM70oB2-jbGvYTsu/view?usp=share_link",
    "_blank"
  );
});

document.getElementById("resume-link-2").addEventListener("click", () => {
  window.location.assign(
    "https://drive.google.com/file/d/11LSC_CpTntfSHYcNwM70oB2-jbGvYTsu/view?usp=share_link",
    "_blank"
  );
});

/* --------------------------------------------------RESUME-DOWNLOAD------------------------------------------------------ */
/* --------------------------------------------------HAMBURGER------------------------------------------------------ */
let hamburger = document.querySelector("#hamburger");
hamburger.onclick = function (){
    let navMenu =document.querySelector("#nav-menu")
    navMenu.classList.toggle("active")
}