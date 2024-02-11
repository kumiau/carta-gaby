
window.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".heart");

  button.addEventListener("click", (event) => {
    const heart = event.target;
    console.log(heart);
    const letter = document.querySelector(".letter");
    if(!letter.open) {
      letter.open = true;
      letter.style.opacity = 1;
      heart.style.top = "0";
    } else {
      letter.open = false;
      letter.style.opacity = 0;
      heart.style.top = "200px";
    }
  });
}, false);
