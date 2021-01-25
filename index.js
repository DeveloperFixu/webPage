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

      // Altura Header

      $(document).ready(function(){
         var altura = $('#carousel').offset().top; 
        //  alert(altura); 
        $(window).on('scroll', function(){
            if( $(window).scrollTop() > (altura -1) ){
                $('.header').addClass('menu-fixed animated fadeIn'); 
            }else{
                $('.header').removeClass('menu-fixed');
                $('.header').addClass('animated fadeIn');
            }
        }); 
      }); 

    // Modal

      $('#ventanaModal').on('shown.bs.modal', function () { 
        $('#myInput').trigger('focus')
      })

      window.onload = () => {
        document.querySelector(".arrow-right").addEventListener("click", clickRight);
        document.querySelector(".arrow-left").addEventListener("click", clickLeft);
        document
          
          // .addEventListener("click", showNotification);
        document.querySelectorAll(".project").forEach(element => {
          element.addEventListener("click", e => openModal(e));
        });
        // document.body.addEventListener("click", e => closeModal(e));
        document.body.addEventListener("keyup", e => listenForEsc(e)); 
      };

      // Comentarios
      
      /** Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
      function clickRight() {
        const currentLeft = parseInt(
          getComputedStyle(document.querySelector(".project-container")).left,
          10
        );
        if (currentLeft < -270) { //si el valor de izquierda es menor a -270, para de mover el contenido
          return;
        }
        let newValue = currentLeft - 270; //270 toma en cuenta el tamaño de la imagen mas sus margines
        document.querySelector(".project-container").style.left = `${newValue}px`;
        switch(newValue){
          case -270:
            document.querySelector('.project1').setAttribute("tabindex", "-1");
            document.querySelector('.project1-container').setAttribute("aria-hidden", true); 
            document.querySelector('.project4').removeAttribute("tabindex");
            document.querySelector('.project4-container').removeAttribute("aria-hidden"); 
            break;
          case -540:
            document.querySelector('.project2').setAttribute("tabindex", "-1");
            document.querySelector('.project2-container').setAttribute("aria-hidden", true);
            document.querySelector('.project5').removeAttribute("tabindex");
            document.querySelector('.project5-container').removeAttribute("aria-hidden");
            break;
          default:
            break;
        }
      }
      
      /** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
      function clickLeft() {
        const currentLeft = parseInt(
          getComputedStyle(document.querySelector(".project-container")).left,
          10
        );
        if (currentLeft === 0) { //si el valor de izquiera es 0, retornar para no seguir movierno el contenido
          return;
        }
        let newValue = currentLeft + 270;
        document.querySelector(".project-container").style.left = `${newValue}px`;
      
        switch(newValue){
          case -270:
            document.querySelector('.project5').setAttribute("tabindex", "-1"),
            document.querySelector('.project5-container').setAttribute("aria-hidden", true);
            document.querySelector('.project2').removeAttribute("tabindex"); 
            document.querySelector('.project2-container').removeAttribute("aria-hidden"); 
            break;
          case 0:
            document.querySelector('.project4').setAttribute("tabindex", "-1");
            document.querySelector('.project4-container').setAttribute("aria-hidden", true);
            document.querySelector('.project1').removeAttribute("tabindex");
            document.querySelector('.project1-container').removeAttribute("aria-hidden");
            break;
          default:
            break;
        }
      }
      
      function contador() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        counters.forEach(counter => {
        const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
        } else {
        counter.innerText = target;}};
        updateCount();});}
