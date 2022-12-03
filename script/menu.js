/**********seccion carrusel animado   ***********/
document.querySelector(".contPrincipal").addEventListener("click", () => {
  let impSlide = document.querySelector('input[name=slider]:checked');
  console.log("click");
  switch (impSlide.id) {
      case "s1":
          document.querySelector("#slide1 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
          break;
      case "s2":
          document.querySelector("#slide2 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
          break;
      case "s3":
          document.querySelector("#slide3 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
          break;
      case "s4":
          document.querySelector("#slide4 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide5 .imgVacia").classList.remove("goodClass")
          break;

      case "s5":
          document.querySelector("#slide5 .imgVacia").classList.add("goodClass")
          document.querySelector("#slide2 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide3 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide4 .imgVacia").classList.remove("goodClass")
          document.querySelector("#slide1 .imgVacia").classList.remove("goodClass")
          break;

      default:
          break;
  }

})
/**********fin seccion carrusel animado   ***********/


/****** cargar cartas */
  //document.querySelector(".especialidadCasa")

/****** cargar cartas */