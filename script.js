const WrongAudio = document.querySelector(".myAudio");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");

let answer = 0;

function generate_equation() {}

option1.addEventListener("click", () => {
  if (option1.innerHTML == answer) {
    generate_equation();
  } else {
    WrongAudio.play();
  }
});
option2.addEventListener("click", () => {
  if (option2.innerHTML == answer) {
    generate_equation();
  } else {
    WrongAudio.play();
  }
});
option3.addEventListener("click", () => {
  if (option3.innerHTML == answer) {
    generate_equation();
  } else {
    WrongAudio.play();
  }
});
