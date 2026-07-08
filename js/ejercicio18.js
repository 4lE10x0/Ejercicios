// Seleccionar los elementos del DOM
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
    const texto = input.value.trim();

    if (texto !== '') {
        // Elemento li con clases de Bootstrap
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        // Añadir el texto como nodo de texto
        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo);

        // Crear botón eliminar con clases de Bootstrap
        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm';
        botonEliminar.textContent = 'Eliminar';

        // Evento para eliminar el elemento al hacer clic
        botonEliminar.addEventListener('click', function () {
            li.remove(); // Elimina el li del DOM
        });

        // Agregar el botón al li
        li.appendChild(botonEliminar);

        // Agregar el li a la lista
        lista.appendChild(li);

        // Limpiar el campo de texto
        input.value = '';
        input.focus();
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}

// Asignar el evento click al botón
botonAgregar.addEventListener('click', agregarElemento);

// Permitir agregar con la tecla Enter
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        agregarElemento();
    }
});