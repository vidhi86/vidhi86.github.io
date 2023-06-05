/* --------------------------------------------------RESUME-DOWNLOAD------------------------------------------------------ */

document.getElementById("resume-link-1").addEventListener("click", () => {
  window.location.assign(
    "https://drive.google.com/file/d/1sii6F0aKP20wAR4JmkMt3vuAXh2FcbMo/view?usp=share_link",
    "_blank"
  );
});

document.getElementById("resume-link-2").addEventListener("click", () => {
  window.location.assign(
    "https://drive.google.com/file/d/1sii6F0aKP20wAR4JmkMt3vuAXh2FcbMo/view?usp=share_link",
    "_blank"
  );
});

/* --------------------------------------------------RESUME-DOWNLOAD------------------------------------------------------ */
/* --------------------------------------------------HAMBURGER------------------------------------------------------ */
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active");

})
/* --------------------------------------------------STICKY NAVBAR------------------------------------------------------ */
window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("nav-menu");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// calendar

let arr = [
  "https://github-readme-streak-stats.herokuapp.com/?user=vidhi86&",
  "https://github-readme-stats.vercel.app/api/top-langs?username=vidhi86&show_icons=true&locale=en&layout=compact",
  "https://github-readme-stats.vercel.app/api?username=vidhi86&show_icons=true&locale=en",
];

    let j=0;
     function slides2(){
     document.getElementById("image2").src = arr[j];
        if (j<arr.length - 1) j++;
        else j=0;
  }
  setInterval(slides2, 1500);