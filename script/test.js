let ubicacionPrincipal  = window.onscroTop;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    console.log(Desplazamiento_Actual)
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}