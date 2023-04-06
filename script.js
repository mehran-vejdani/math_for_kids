const WrongAudio = document.querySelector(".myAudio");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");

const number1 = document.querySelector(".num1");
const number2 = document.querySelector(".num2");

let answer = 0;

function generate_equation() {
  let num1 = Math.floor(Math.random() * 13);
  let num2 = Math.floor(Math.random() * 13);
  let dummyAnswer1 = Math.floor(Math.random() * 13);
  let dummyAnswer2 = Math.floor(Math.random() * 13);

  let addAnswer = [];
  answer = num1 + num2;
  number1.innerHTML = num1;
  number2.innerHTML = num2;

  option1.innerHTML = answer;
  option2.innerHTML = dummyAnswer1;
  option3.innerHTML = dummyAnswer2;
}

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
