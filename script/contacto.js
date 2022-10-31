
    /***********mapa ********** */
var map;
function initMap() {
    let coord= {lat:-37.328762 ,lng: -59.136906};
  map = new google.maps.Map(document.getElementById('map'), {
    center: coord,
    zoom: 8
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
  
}
/***********fin de mapa*********** */

document.addEventListener("DOMContentLoaded", () => {
/*******header************ */
 
    let flag = 0;
    const element = document.querySelector('.menuOculto');
  
    const elemento = document.querySelector('.lihamb');
  
    elemento.addEventListener("click", () => {
  
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
    /**********fin header************ */
  
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
    /************footer*********** */

/***********formulario************** */
//script para el funcionamiento de la pagina de contacto.
"use strict";
let borrar =()=>{// funcion que borra los campos del formulario.
  let entradas=document.querySelectorAll(".formulario input,textarea");
  entradas.forEach(element => {
    element.value="";  
    document.getElementById("borrarCampos").value="Borrar campos";
  });
    cadenaAleatoria();//genera un nuevo captcha 
}
let cadenaAleatoria=()=>{//2- funcion que genera un captcha de 6 letras aleatorias
    let abecedario="abcdefghijklmnopqrstuvwxyz";
    let letraGenerada="";
    for (let i=0;i<6;i++){
     letraGenerada+=abecedario.substr((Math.random()*25),1);//genera un numero aleatorio de 0 a 25 que es el equivalente a la posicion de una letra y extrae un caracter a partir de esa posicion
    }
    document.getElementById("captchaAleatorio").innerHTML=letraGenerada; //hace aparecer el captcha en la pagina
}
cadenaAleatoria();// 1---este es el primer codigo que se ejecuta cuando carga la pagina, llama a la funcion para que genere un captcha
let verificaFormulario=()=>{//Esta funcion lo que hace es comprar el valor del campo captcha con el valor del textbox donde escribe el usuario.
    let campoAleatorio=document.getElementById("captchaAleatorio").innerHTML;//traigo el captcha
    let campoUsuario=document.getElementById("captchaUsuario");//traigo lo que escribió el usuario
    let nombre=campoUsuario.value;
    if (campoAleatorio==nombre){
        console.log("Formulario enviado con exito");// si son iguales el formulario se envia 
        cadenaAleatoria();//genera un nuevo captcha para volver a intentar
        return true;
    }else{
        console.log("captcha incorrecto");//sino no se envia 
        cadenaAleatoria();//genera un nuevo captcha para volver a intentar
        return false;
    }
}


/*let btn= document.getElementById("btnEnviar");//3---- Una vez cargada la pagina Se queda a la espera de que haya un click (se podria clickear el boton borrar...)y cuando sucede
// ejecuta el preventedefault(para que no se recargue la pagina al dar click) y luego llama a la funcion verificaFormulario
btn.addEventListener("click",function(evt){
    evt.preventDefault();
    verificaFormulario();
})*/;// pero al aplicar el prevenDefault no funciona el corrector del campo email
let botonBorrar=document.getElementById("borrarCampos");//si el uduario escrio algo los campos quedan llenos porque la pagina no se actualiza, por lo tanto
botonBorrar.addEventListener("click",borrar);//este boton llama a la funcion borrar


const formul=document.querySelector("#formulario");
formul.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formu=new FormData(formul);
    if (verificaFormulario()){
        let aMail=document.querySelector("#mail");
        aMail.setAttribute("aref",`mailto:restaurant@resto.com.ar?subject=${formu.get("asunto")}&body=${formu.get("mensaje")}`);
        aMail.click();
    }
    console.log(formu.get("nombre"))
})



/***********fin formulario ************* */ 
 })

  