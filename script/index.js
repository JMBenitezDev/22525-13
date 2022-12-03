document.addEventListener("DOMContentLoaded", () => {

  let flag = 0;
  const element = document.querySelector('.menuOculto');

  const elemento = document.querySelector('.lihamb');

  elemento.addEventListener("click", () => {
console.log("hamb");
    if (flag == 0) {
      element.classList.remove("oculto");
    }
    flag = 1;
    element.classList.forEach(el => {

      element.classList.toggle("visible");
      element.classList.toggle('animate__backInRight');
      element.classList.toggle('animate__backOutRight');

      element.classList.toggle("oculto");

    })
  });

  /************footer*********** */
  document.querySelector("#search").addEventListener("click", () => {

    let inputSearch = document.querySelector("#inpSearch")
    inputSearch.focus();
    let divSearch = document.querySelector(".searcher")
    divSearch.classList.toggle("oculto");
    divSearch.classList.toggle("visible");
  })

  document.querySelector(".searcher a").addEventListener("click", (e) => {
    e.preventDefault();
    let divSearch = document.querySelector(".searcher")
    divSearch.classList.toggle("oculto");
    divSearch.classList.toggle("visible");
  })

  /*document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    window.location="index.html";
  })*/
  /************footer*********** */
})

/**********header ********* */

/********fin header *********/