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

/**Esta funcion permite generar los globos sobre los iconos de index ¿Cómo Funciona? */
$(function(){
  
//crearemos una variable y accedemos a la ID de los iconos  y de tooltop_i con "document.querySelectro()"
const icono = document.getElementById('icono'); //querrySelector
const tooltip = document.getElementById('tooltip_i');

//calcular la posicion del tootip en mobil

const calcularPosicionTooltip = () => {

  //calculamos las coordenasdas de icono
  const x = icono.offsetLeft;
  const y = icono.offsetTop;
  //calculamos el tamaño del tooltip
  const anchoTooltip = tooltip.clientWidth;
  const altoTooltip = tooltip.clientHeight;
  //Calculamos donde posicionaremos el tooltip
  const izquierda = x - (anchoTooltip / 2) + 15;//utilizamos el "/ 2" de (anchoTooltip / 2) para ubicarlo a la mitad del icono
  const arriba = y - altoTooltip - 10;
   // modificar nuestro tooltop y posicionarlo deacuerdo a las coordenadas
  tooltip.style.left = `${izquierda}px`; //nos permite ubicarlo donde este la ID icono, `${x}px` indica que se pocisionara justo al lado derecho donde se encuentre el ID icono
  tooltip.style.top = `${arriba}px`;
};
//Cuando la pagina cargue ejecute una función de tipo flecha
window.addEventListener('load', () => calcularPosicionTooltip());
window.addEventListener('resive', () => calcularPosicionTooltip());
//la funcion nos permite mostrar el tooltip al pasar el cursor, al igual nos permite recalcular la posición del tooltip
icono.addEventListener('mouseenter', () => {
    tooltip.classList.add('activo');
    calcularPosicionTooltip();
});

icono.addEventListener('mouseleave', () => {
    tooltip.classList.remove('activo');
});

//esta función nos permite ocultar el tooltip una vez el cursor este fuera
icono.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));
});

/**Esta funcion permite generar los globos sobre los iconos de index ¿Cómo Funciona? */
$(function(){
  
  //crearemos una variable y accedemos a la ID de los iconos  y de tooltop_i con "document.querySelectro()"
  const icono = document.getElementById('icono_2'); //querrySelector
  const tooltip = document.getElementById('tooltip_i-2');
  
  //calcular la posicion del tootip en mobil
  
  const calcularPosicionTooltip = () => {
  
    //calculamos las coordenasdas de icono
    const x = icono.offsetLeft;
    const y = icono.offsetTop;
    //calculamos el tamaño del tooltip
    const anchoTooltip = tooltip.clientWidth;
    const altoTooltip = tooltip.clientHeight;
    //Calculamos donde posicionaremos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 15;//utilizamos el "/ 2" de (anchoTooltip / 2) para ubicarlo a la mitad del icono
    const arriba = y - altoTooltip - 10;
     // modificar nuestro tooltop y posicionarlo deacuerdo a las coordenadas
    tooltip.style.left = `${izquierda}px`; //nos permite ubicarlo donde este la ID icono, `${x}px` indica que se pocisionara justo al lado derecho donde se encuentre el ID icono
    tooltip.style.top = `${arriba}px`;
  };
  //Cuando la pagina cargue ejecute una función de tipo flecha
  window.addEventListener('load', () => calcularPosicionTooltip());
  window.addEventListener('resive', () => calcularPosicionTooltip());
  //la funcion nos permite mostrar el tooltip al pasar el cursor, al igual nos permite recalcular la posición del tooltip
  icono.addEventListener('mouseenter', () => {
      tooltip.classList.add('activo');
      calcularPosicionTooltip();
  });
  
  icono.addEventListener('mouseleave', () => {
      tooltip.classList.remove('activo');
  });
  
  //esta función nos permite ocultar el tooltip una vez el cursor este fuera
  icono.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));
  });

/**Esta funcion permite generar los globos sobre los iconos de index ¿Cómo Funciona? */
$(function(){
  
  //crearemos una variable y accedemos a la ID de los iconos  y de tooltop_i con "document.querySelectro()"
  const icono = document.getElementById('icono_3'); //querrySelector
  const tooltip = document.getElementById('tooltip_i-3');
  
  //calcular la posicion del tootip en mobil
  
  const calcularPosicionTooltip = () => {
  
    //calculamos las coordenasdas de icono
    const x = icono.offsetLeft;
    const y = icono.offsetTop;
    //calculamos el tamaño del tooltip
    const anchoTooltip = tooltip.clientWidth;
    const altoTooltip = tooltip.clientHeight;
    //Calculamos donde posicionaremos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 15;//utilizamos el "/ 2" de (anchoTooltip / 2) para ubicarlo a la mitad del icono
    const arriba = y - altoTooltip - 10;
     // modificar nuestro tooltop y posicionarlo deacuerdo a las coordenadas
    tooltip.style.left = `${izquierda}px`; //nos permite ubicarlo donde este la ID icono, `${x}px` indica que se pocisionara justo al lado derecho donde se encuentre el ID icono
    tooltip.style.top = `${arriba}px`;
  };
  //Cuando la pagina cargue ejecute una función de tipo flecha
  window.addEventListener('load', () => calcularPosicionTooltip());
  window.addEventListener('resive', () => calcularPosicionTooltip());
  //la funcion nos permite mostrar el tooltip al pasar el cursor, al igual nos permite recalcular la posición del tooltip
  icono.addEventListener('mouseenter', () => {
      tooltip.classList.add('activo');
      calcularPosicionTooltip();
  });
  
  icono.addEventListener('mouseleave', () => {
      tooltip.classList.remove('activo');
  });
  
  //esta función nos permite ocultar el tooltip una vez el cursor este fuera
  icono.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));
  });
  
  /**Esta funcion permite generar los globos sobre los iconos de index ¿Cómo Funciona? */
  $(function(){
    
    //crearemos una variable y accedemos a la ID de los iconos  y de tooltop_i con "document.querySelectro()"
    const icono = document.getElementById('icono_4'); //querrySelector
    const tooltip = document.getElementById('tooltip_i-4');
    
    //calcular la posicion del tootip en mobil
    
    const calcularPosicionTooltip = () => {
    
      //calculamos las coordenasdas de icono
      const x = icono.offsetLeft;
      const y = icono.offsetTop;
      //calculamos el tamaño del tooltip
      const anchoTooltip = tooltip.clientWidth;
      const altoTooltip = tooltip.clientHeight;
      //Calculamos donde posicionaremos el tooltip
      const izquierda = x - (anchoTooltip / 2) + 15;//utilizamos el "/ 2" de (anchoTooltip / 2) para ubicarlo a la mitad del icono
      const arriba = y - altoTooltip - 10;
       // modificar nuestro tooltop y posicionarlo deacuerdo a las coordenadas
      tooltip.style.left = `${izquierda}px`; //nos permite ubicarlo donde este la ID icono, `${x}px` indica que se pocisionara justo al lado derecho donde se encuentre el ID icono
      tooltip.style.top = `${arriba}px`;
    };
    //Cuando la pagina cargue ejecute una función de tipo flecha
    window.addEventListener('load', () => calcularPosicionTooltip());
    window.addEventListener('resive', () => calcularPosicionTooltip());
    //la funcion nos permite mostrar el tooltip al pasar el cursor, al igual nos permite recalcular la posición del tooltip
    icono.addEventListener('mouseenter', () => {
        tooltip.classList.add('activo');
        calcularPosicionTooltip();
    });
    
    icono.addEventListener('mouseleave', () => {
        tooltip.classList.remove('activo');
    });
    
    //esta función nos permite ocultar el tooltip una vez el cursor este fuera
    icono.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));
    });

      /**Esta funcion permite generar los globos sobre los iconos de index ¿Cómo Funciona? */
  $(function(){
    
    //crearemos una variable y accedemos a la ID de los iconos  y de tooltop_i con "document.querySelectro()"
    const icono = document.getElementById('icono_5'); //querrySelector
    const tooltip = document.getElementById('tooltip_i-5');
    
    //calcular la posicion del tootip en mobil
    
    const calcularPosicionTooltip = () => {
    
      //calculamos las coordenasdas de icono
      const x = icono.offsetLeft;
      const y = icono.offsetTop;
      //calculamos el tamaño del tooltip
      const anchoTooltip = tooltip.clientWidth;
      const altoTooltip = tooltip.clientHeight;
      //Calculamos donde posicionaremos el tooltip
      const izquierda = x - (anchoTooltip / 2) + 15;//utilizamos el "/ 2" de (anchoTooltip / 2) para ubicarlo a la mitad del icono
      const arriba = y - altoTooltip - 10;
       // modificar nuestro tooltop y posicionarlo deacuerdo a las coordenadas
      tooltip.style.left = `${izquierda}px`; //nos permite ubicarlo donde este la ID icono, `${x}px` indica que se pocisionara justo al lado derecho donde se encuentre el ID icono
      tooltip.style.top = `${arriba}px`;
    };
    //Cuando la pagina cargue ejecute una función de tipo flecha
    window.addEventListener('load', () => calcularPosicionTooltip());
    window.addEventListener('resive', () => calcularPosicionTooltip());
    //la funcion nos permite mostrar el tooltip al pasar el cursor, al igual nos permite recalcular la posición del tooltip
    icono.addEventListener('mouseenter', () => {
        tooltip.classList.add('activo');
        calcularPosicionTooltip();
    });
    
    icono.addEventListener('mouseleave', () => {
        tooltip.classList.remove('activo');
    });
    
    //esta función nos permite ocultar el tooltip una vez el cursor este fuera
    icono.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));
    });



/**Nos permite ejecutar el TwentyTwenty vertical */
$(function(){
  $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7});
  $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
});

/***$("#slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.foreground-img').css('width', `${sliderPos}%`)
});

$("#slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});
 */

//activar el Menu de Navegación
$(function(){
  const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span'); /**esto quiere reprensar todos los span que estan el boton*/

ham.addEventListener('click', () => {
 enlaces.classList.toggle('activado');
 barras.forEach(child => {child.classList.toggle('animado')}); /**Para cada elemento de la variables barras  qie incluye los tres elemtos span le agregamos la clase animado*/
});

});


// Altura Header
$(document).ready(function () {
  var altura = $('#altura').offset().top;
  //  alert(altura); 
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > (altura - 1)) {
      $('.header').addClass('menu-fixed animated fadeIn');
    } else {
      $('.header').removeClass('menu-fixed');
      $('.header').addClass('animated fadeIn');
    }
  });
});

// Modal
$(function(){
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
    // document.body.addEventListener("keyup", e => listenForEsc(e)); 
  };
});

// Comentarios

$(function(){
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
    switch (newValue) {
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
  
    switch (newValue) {
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
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }
});

/**Validación para formulario registro**/

$(function(){

  const formulario = document.getElementById('formulario');
  const inputs = document.querySelectorAll('#formulario input');
  
  const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras, numeros, guion y guion_bajo
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      celular: /^\d{7,14}$/, // 7 a 14 numeros.
      ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      direccion: /^[a-zA-Z0-9-.#\s]{1,40}$/,
      descripcion: /^[a-zA-Z0-9/-]{1,100}$/,
      marca: /^[a-zA-ZÀ-ÿ0-9_-\s]{1,40}$/,
      modelo: /^[a-zA-ZÀ-ÿ0-9_-\s]{1,40}$/
  }
  
  const campos = {
      nombre: false,
      correo: false,
      celular: false,
      ciudad: false,
      direccion: false,
      descripcion: false,
      marca: false,
      modelo: false
  }
  
  /** se crear una constante en al cual va a ir toda la validacion
   * al igual que se crea una funcion de tipo fecha
   */
  const validarFormulario = (e) => {
      switch (e.target.name) {
          case "nombre":
              validarCampo(expresiones.nombre, e.target, 'nombre');
              break;
  
          case "correo":
              validarCampo(expresiones.correo, e.target, 'correo');
              break;
  
          case "celular":
              validarCampo(expresiones.celular, e.target, 'celular');
              break;
  
          case "ciudad":
              validarCampo(expresiones.ciudad, e.target, 'ciudad');
              break;
  
          case "direccion":
              validarCampo(expresiones.direccion, e.target, 'direccion');
              break;
  
          case "descripcion":
              validarCampo(expresiones.descripcion, e.target, 'descripcion');
              break;
  
          case "marca":
              validarCampo(expresiones.marca, e.target, 'marca');
              break;
  
          case "modelo":
              validarCampo(expresiones.modelo, e.target, 'modelo');
              break;
      }
  }
  
  const validarCampo = (expresion, input, campo) => {
      if (expresion.test(input.value)) {
          document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
          document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
          document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times');
          document.querySelector(`#grupo_${campo} i`).classList.add('fa-check');
          document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
          campos[campo] = true;
      } else {
          document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
          document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
          document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check');
          document.querySelector(`#grupo_${campo} i`).classList.add('fa-times');
          document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
          campos[campo] = false;
      }
  }
  /**Cuando levante la tecla quiero que ejecute esta función
   * va a comprobar los campos 
   * y cuando le de clic fuera del input tambien valide
   */
  inputs.forEach((input) => {
      input.addEventListener('keyup', validarFormulario);
      input.addEventListener('blur', validarFormulario);
  });
  
  formulario.addEventListener('submit', (e) => {
      //e.preventDefault();
      const terminos = document.getElementById('terminos');
      if(campos.nombre && campos.celular  && campos.ciudad && campos.direccion && campos.descripcion && campos.marca && campos.modelo && terminos.checked){
          formulario.reset();
          
          document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
          setTimeout(() => {
              document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
  
          }, 5000);
          document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
              icono.classList.remove('formulario_grupo-correcto');
          });
      } else{
          document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
          setTimeout(() => {
              document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');
  
          }, 5000);
      }
  });
});



