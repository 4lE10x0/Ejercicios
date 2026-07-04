let estudiantes = [];

function actualizartabla() {
    let filas = "";
    estudiantes.forEach((est, index) => {
        filas += `
        <tr>
            <td>${index + 1}</td>
            <td>${est.nombre}</td>
            <td>${est.calificacion}</td>
        </tr>
    `;
    });
    document.getElementById("lista_estudiantes").innerHTML = filas;
}

function agregarEstudiante() {
    let name = document.getElementById('nombre').value;
    let calif = parseFloat(document.getElementById('calif').value);

    if(name === "" || calif === "") alert("Error. Los campos no pueden estar vacios"); return;

    let newEstudiante = {
        nombre: name,
        calificacion: calif
    };

    estudiantes.push(newEstudiante);
    actualizartabla();

    document.getElementById('nombre').value = "";
    document.getElementById('calif').value = "";
}

function encontrarEstudianteporCalificacion(calif) {
    return estudiantes.filter(est => est.calificacion === calif);
}

function calcular() {
    let suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = suma / estudiantes.length;

    let califMax = Math.max(...estudiantes.map(e => e.calificacion));
    let califMin = Math.min(...estudiantes.map(e => e.calificacion));

    let estudiantesMax = encontrarEstudianteporCalificacion(califMax);
    let estudiantesMin = encontrarEstudianteporCalificacion(califMin);

    let nombresMax = "";
    estudiantesMax.forEach(est => {
        if (nombresMax === "") {
            nombresMax = est.nombre;
        }
        nombresMax.concat(", " + est.nombre);
    }
    );

    let nombresMin = "";
    estudiantesMin.forEach(est => {
        if (nombresMin === "") {
            nombresMin = est.nombre;
        }
        nombresMin.concat(", " + est.nombre);
    }
    )

    document.getElementById('resultados').value = "Promedio de Calificaciones: " + promedio + "\n" +
        "Estudiante(s) con Mayor Calificacion: " + nombresMax + "\n" +
        "Estudiante(s) con Menor Calificacion: " + nombresMin;
}