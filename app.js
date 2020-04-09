(function () {
    var formulario = document.getElementById('formulario'),
        enviar = document.getElementById('enviar'),
        nombre = formulario.nombre,
        hombre = formulario.hombre,
        mujer = formulario.mujer,
        termino = formulario.termino;

    var vaNombre = function (e) {
        if (nombre.value == 0) {
            alert('Escriba Un Nombre');
            e.preventDefault();
        }
    }
    var vaSexo = function (e) {
        if (hombre.checked == true || mujer.checked == true) {} else {
            alert('Elije un Opcion');
            e.preventDefault();
        }
    }
    var vaTermino = function (e) {
        if (termino.checked == true) {} else {
            alert('Marca Terminos');
            e.preventDefault();
        }
    }
    var validar = function (e) {
        vaNombre(e);
        vaSexo(e);
        vaTermino(e);
    }

    formulario.addEventListener('submit', validar);
}());
