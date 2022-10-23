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

/************footer*********** */
/*
document.querySelector("#home").addEventListener("click",(e)=>{
  e.preventDefault();
  document.querySelector("#home").src="./img/pagina-de-inicioG.png";
})
document.querySelector("#search").addEventListener("click",(e)=>{
  e.preventDefault();
  document.querySelector("#search").src="./img/searchG.png";
})
document.querySelector("#call").addEventListener("click",(e)=>{
  e.preventDefault();
  document.querySelector("#call").src="./img/phone-callG.png";
})
/*document.querySelector("#user").addEventListener("click",(e)=>{
  e.preventDefault();
  document.querySelector("#user").src="./img/usuarioG.png";
})*/
/************footer*********** */
