let btn1 = document.querySelector('.btn1');
let inp = document.querySelector('input');
let text = document.querySelector('p');

btn1.onclick = function () {
  text.innerText = inp.value;
};
