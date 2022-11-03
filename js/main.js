const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let selectorcategoria = document.getElementById("selector");
let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");

function totalAPagar(){

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        alert("Escriba su nombre");
        return;
    }
    
    else if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        alert("Escriba su apellido");
        return;
    }

    else if (email.value === "") {
        email.classList.add("is-invalid");
        alert("Escriba su email");
        return;
    } 

    else if ( (cantidad.value == 0) || (isNaN(cantidad.value)) ) {
        cantidad.classList.add("is-invalid");
        alert("Escriba una cantidad válida");
        return;
    }

    else if (selectorcategoria.value == 0) {
        selectorcategoria.classList.add("is-invalid");
        alert("Elija una categoría");
        return;
    }

    let precioTotal = (valorTicket * parseFloat(cantidad.value));

    if (selectorcategoria.value == 1) {
        precioTotal = precioTotal ;
    }

    else if (selectorcategoria.value == 2) {
        precioTotal = ((descuentoEstudiante / 100) * precioTotal);
    }

    else if (selectorcategoria.value == 3) {
        precioTotal = ((descuentoTrainee / 100) * precioTotal);
    }

    else if (selectorcategoria.value == 4) {
        precioTotal = ((descuentoJunior / 100) * precioTotal);
    }

    console.log(precioTotal);

    exampleFormControlTextarea1.innerHTML = "Total a pagar: $" + precioTotal;
}

function quitarClaseError () {
    
}



btnResumen.addEventListener('click', totalAPagar)

