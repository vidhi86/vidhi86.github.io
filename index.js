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
// calendar

let arr = ["https://github-readme-stats.vercel.app/api/top-langs?username=vidhi86&show_icons=true&locale=en&layout=compact", "https://github-readme-stats.vercel.app/api?username=vidhi86&show_icons=true&locale=en", "https://github-readme-streak-stats.herokuapp.com?user=vidhi86&theme=vue&border_radius=4.3"];

    let j=0;
     function slides2(){
     document.getElementById("image2").src = arr[j];
        if (j<arr.length - 1) j++;
        else j=0;
  }
  setInterval(slides2, 1500);