const hamburger = document.querySelector('.hamburguer');
/* const face = document.querySelector('#face'); */
const so = window.navigator.appVersion.toLowerCase();
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

/* face.addEventListener('click', function() {
    if(so === 'android') {
       face.href ='fb://page/GUAI-100527392201822';
    } if(so === 'iphone'){
        face.href = 'fb://page/?id=GUAI-100527392201822';
    } else {
        face.href = 'https://www.facebook.com/GUAI-100527392201822';
    }
}) */




