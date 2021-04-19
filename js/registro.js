/**Validación para formulario**/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras, numeros, guion y guion_bajo
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{7,14}$/, // 7 a 14 numeros.
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    direccion: /^[a-zA-Z0-9-.#\s]{1,40}$/,
    descripcion: /^[a-zA-Z0-9/-]{1,100}$/,
    marca: /^[a-zA-ZÀ-ÿ0-9_-\s]{1,40}$/,
    modelo: /^[a-zA-ZÀ-ÿ0-9_-\s]{1,40}$/
}

const campos = {
    usuario: false,
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
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
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
 * va a comprar los campos 
 * y cuando le de clic fuera del input tambien valide
 */
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const terminos = document.getElementById('terminos');
    if(campos.usuario && campos.celular  && campos.ciudad && campos.direccion && campos.descripcion && campos.marca && campos.modelo && terminos.checked){
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