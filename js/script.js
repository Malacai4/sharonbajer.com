$(".navbar").load("../common/nav.html");

const imgs = document.querySelectorAll("section .image-container");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    var $sec = entry.target.parentElement;

    if (entry.isIntersecting) {
      $sec.classList.remove("unslide-anim");
      $sec.classList.add("slide-anim");
      return; // if we added the class, exit the function
    }
    $sec.classList.remove("slide-anim");
    $sec.classList.add("unslide-anim");
  });
});

for (let i = 0; i < imgs.length; i++) {
  observer.observe(imgs[i], i);
}

function openHam() {
  $(".hamburger").toggleClass("is-active");
  $(".nav-links").toggleClass("open");
}
