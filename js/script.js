$(".navbar").load("../common/nav.html");

const imgs = document.querySelectorAll("section img");
let divIndex = 0;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    var $sec = $(".container section")[divIndex];
    console.log($sec);

    if (entry.isIntersecting) {
      $sec.classList.remove("unslide-anim");
      $sec.classList.add("slide-anim");
      return; // if we added the class, exit the function
    }
    $sec.classList.remove("slide-anim");
    $sec.classList.add("unslide-anim");
  });
});

imgs.forEach((i) => {
  observer.observe(i);
  divIndex = imgs.indexOf(i);
});
