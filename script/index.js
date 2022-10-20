let text = document.querySelector("#text");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginBottom = value * 2 + "px";
})

let flag = 0;
const element = document.querySelector('.menuOculto');

const elemento = document.querySelector('.lihamb');

elemento.addEventListener("click", () => {
 
  if (flag == 0) {
    element.classList.remove("oculto");
  }
  flag=1;
  element.classList.forEach(el => {

    element.classList.toggle("visible");
    element.classList.toggle('animate__backInRight');
    element.classList.toggle('animate__backOutRight');

    element.classList.toggle("oculto");

  })
});
