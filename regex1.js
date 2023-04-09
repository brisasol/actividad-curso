function doSubmit(form) {
    const codigoPostalRegex=/^[0-9]{5,5}$/
    const provinciaRegex=/^[a-zA-Z\s]{4,25}$/
    const ciudadesCodigoPostal=['0','Alava','Albacete','Alicante','Almeria','Avila','Badajoz','Islas Baleares','Barcelona','Burgos','Caceres','Cadiz','Castellon','Ciudad Real','Cordoba','La Coruna','Cuenca','Gerona','Granada','Guadalajara','Guipuzcoa','Huelva','Huesca','Jaen','Leon','Lerida','La Rioja','Lugo','Madrid','Malaga','Murcia','Navarra','Orense','Asturias','Palencia','Las Palmas','Pontevedra','Salamanca','Santa Cruz de Tenerife','Cantabria','Segovia','Sevilla','Soria','Tarragona','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza','Ceuta','Melilla']
    const codigoPostal=document.querySelector('#codigoPostal')
    let numeroCodigoPostal= codigoPostal.value
    if(!codigoPostalRegex.test(numeroCodigoPostal)){
        mostrarAlerta('El código postal no tiene el formato correcto','red')
        return false
    }
    let primerosCodigoPostal=numeroCodigoPostal.slice(0,2)
    console.log(parseInt(primerosCodigoPostal,10))
    let ciudadCodigoPostal=ciudadesCodigoPostal[parseInt(primerosCodigoPostal,10)]
    console.log(ciudadCodigoPostal)
    const provincia=document.querySelector('#provincia')
    if(!provinciaRegex.test(provincia.value)){
        mostrarAlerta ('La provincia no tiene el formato correcto','red')
        return false
    }
    
    if (provincia.value.toLowerCase()!=ciudadCodigoPostal.toLowerCase()){
        mostrarAlerta('La provincia no coincide con el Código Postal','red')

    }else{
        mostrarAlerta('La provincia coincide con el código postal','green')
    }

 return false
 //este return false de modo normal no lo pondría pero es para que una vez "enviemos" el formulario no desaparezca y se pueda ver claramente que sale el mensaje de "la provincia coincide con el cp"
}


function mostrarAlerta(mensajeMostrar,color){
    let mensaje=document.querySelector('#alertaCodigoPostal')
    mensaje.innerText=mensajeMostrar
    mensaje.style.color=color
}

const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

var modal = document.getElementById("myModal");
var modalMensaje = document.getElementById("mensajeModal");
var modalContent = document.getElementById("contentModal");

modalTriggerButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});
modalCloseButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});
modals.forEach(elem => {
  elem.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
  });
});

// Maybe also close with "Esc"...
document.addEventListener("keydown", event => {
  if(event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if(getComputedStyle(modal).display==="flex") { // alternatively: if(modal.classList.contains("modal-show"))
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown - in this case: "initial" <=> "visible"
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";      
    }, 200);
  }
  else {
    document.body.style.overflow = "hidden"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}

function closeModal() {
  modal.display = "none";
  modalContent.backgroundColor = 'white';
}
var modal = document.getElementsByClassName("modal");
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

var mensage = document.getElementsByClassName("modal-body");
var modalMensaje = document.getElementById("mensajeModal");
var modal1Mensaje = document.getElementById("mensajeModal1");
var modal1Content = document.getElementById("contentModal1");
var modal2Mensaje = document.getElementById("mensajeModal2");
var modal2Content = document.getElementById("contentModal2");
var modal3Mensaje = document.getElementById("mensajeModal3");
var modal3Content = document.getElementById("contentModal3");
var valorusuario = $('#valorusuario').val();
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']


var span = document.getElementsByClassName("close")[0];

function showValoracion(){
    var valorusuario = $('#valorusuario').val();
    var mensage = ("Ha valorado con " + String(valorusuario) + " puntos");
    modal1Mensaje.innerText = mensage;
    modal1.display = "block";
}


 //Show cuenta input value in modal

function showCuenta(){
  var cuenta = $('#pais').val()+$('#iban').val()+
                '-'+$('#entidad').val()+'-'+$('#sucursal').val()+
                '-'+$('#dc').val()+'-'+$('#cuenta').val();
  var mensage = "Le informamos de que su cuenta bancaria es: " + cuenta;
  modal2Mensaje.innerText = mensage;
  modal.display = "block";
}

// Show dia input value in modal
 
function showDia(){
    var fecha = new Date($('#fecha').val());
    var dia = diaSemana[fecha.getDay()];
    var mensage = "La fecha seleccionada en el elemento de fecha es un " + dia;
    modal3Mensaje.innerText = mensage;
    modal.display = "block";
}
