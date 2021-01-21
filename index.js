// function filtro(c) {
//     var x = document.getElementById("gallery");
//     var y = x.querySelectorAll("div");
//     var i,c;
//     for (i = 0; i < y.length; i++) {
//     if (y[i].id == c || c == "all") {y[i].style.display = "grid"}
//     else {y[i].style.display = "none"}
// }
// }

// const mobile = window.matchMedia('screen and (max-width: 767px)');
//       const menu = document.querySelector('.menu');
     
//       const burgerButton = document.querySelector('#burger-menu');
//       mobile.addListener(validation)
//       function validation(event) {        
//         if(event.matches) {
//           burgerButton.addEventListener('click',hideShow)
//         }
//         else {
//           burgerButton.removeEventListener('click',hideShow)
//         }
//       } 
//       validation(mobile);     
//       function hideShow() {
//         if(menu.classList.contains('is-active')){
//           menu.classList.remove('is-active'); 
//         }
//         else{          
//           menu.classList.add('is-active'); 
//         }
//       }

      $(document).ready(function(){
         var altura = $('.carousel').offset().top; 
        //  alert(altura); 
        $(window).on('scroll', function(){
            if( $(window).scrollTop() > altura ){
                $('.header').addClass('menu-fixed animated fadeIn'); 
            }else{
                $('.header').removeClass('menu-fixed');
                $('.header').addClass('animated fadeIn');
            }
        }); 
      }); 

      $('#ventanaModal').on('shown.bs.modal', function () { 
        $('#myInput').trigger('focus')
      })
