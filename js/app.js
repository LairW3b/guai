const hamburger = document.querySelector('.hamburguer');
let enlaces = document.querySelectorAll('.navegacion__menu')[0];
let bandera = true;

hamburger.addEventListener('click', function(){
    if(bandera){
        
        bandera = false;
        enlaces.classList.toggle("menudos");    
        
    }else{
        bandera = true;
        
        enlaces.classList.remove("menudos")
    }
})


