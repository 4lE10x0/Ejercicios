// IIFE para crear un closure y encapsular el estado
(function () {
    //Scope
    let tareas = [];

    //Funciones de almacenamiento

    function obtenerTareas() {
        const data = localStorage.getItem('tareas');
        tareas = data ? JSON.parse(data) : [];
        return tareas;
    }

    function guardarTareas() {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    //Funciones

    function agregarTarea(texto) {
        const textoTrim = texto.trim();
        if (textoTrim === '') {
            Swal.fire('Error', 'La tarea no puede estar vacía', 'error');
            return false;
        }
        tareas.push({ texto: textoTrim, completada: false });
        guardarTareas();
       renderizarTareas(); 
        return true;
    }

    function eliminarTarea(index) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'No podrás revertir esta acción',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                tareas.splice(index, 1);
                guardarTareas();
                renderizarTareas();
                Swal.fire('Eliminada', 'La tarea ha sido eliminada.', 'success');
            }
        });
    }

    // Renderizado

    function renderizarTareas() {
        obtenerTareas();
        const lista = document.getElementById('listaTareas');
        lista.innerHTML = '';

        if (tareas.length === 0) {
            lista.innerHTML =
                '<li class="list-group-item text-center text-muted">No hay tareas pendientes</li>';
            return;
        }

        tareas.forEach((tarea, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.textContent = tarea.texto;

            const btnEliminar = document.createElement('button');
            btnEliminar.className = 'btn btn-danger btn-sm';
            btnEliminar.textContent = 'Eliminar';

            btnEliminar.addEventListener('click', (function (idx) {
                return function () {
                    eliminarTarea(idx);
                };
            })(index));

            li.appendChild(btnEliminar);
            lista.appendChild(li);
        });
    }

    //Inicializacion

    obtenerTareas();
    renderizarTareas();

    //DOM

    document.getElementById('btnAgregar').addEventListener('click', function () {
        const input = document.getElementById('nuevaTarea');
        const texto = input.value;
        if (agregarTarea(texto)) {
            input.value = ''; 
        }
    });

    document.getElementById('nuevaTarea').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            document.getElementById('btnAgregar').click();
        }
    });

})();