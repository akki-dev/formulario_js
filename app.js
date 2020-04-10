(function () {
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        hombre = formulario.hombre,
        mujer = formulario.mujer,
        termino = formulario.termino;

    var vaNombre = function (e) {
        (nombre.value == 0) ? (alert('Escriba Un Nombre'),
            e.preventDefault()) : '';
    }
    var vaSexo = function (e) {
        (hombre.checked == true || mujer.checked == true) ? '' : alert('Elije un Opcion'),
        e.preventDefault();
    }
    var vaTermino = function (e) {
        (termino.checked == true) ? '' : alert('Marca Termino'),
        e.preventDefault();
    }
    var validar = function (e) {
        vaNombre(e);
        vaSexo(e);
        vaTermino(e);
    }

    formulario.addEventListener('submit', validar);
}());