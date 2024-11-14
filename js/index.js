let nombresDeAprobados = (estudiantes) => {
    let nombres = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota >= 10) {
            nombres.push(estudiantes[i].nombre);
        }
    }
    return nombres;
}

let estudiantes = [
    { nombre: "Juan", semestre: 5, nota: 8 },
    { nombre: "María", semestre: 2, nota: 9 },
    { nombre: "Pedro", semestre: 7 ,nota: 19 },
    { nombre: "Ana", semestre: 3, nota: 10 },
    { nombre: "Luis", semestre: 8, nota: 11 },
    { nombre: "Laura", semestre: 4, nota: 12 },
    { nombre: "Carlos", semestre: 1, nota: 13 },
    { nombre: "Marta", semestre: 6, nota: 5 },
    { nombre: "Sofía", semestre: 9, nota: 15 },
    { nombre: "Javier", semestre: 8, nota: 10 }
];

let salida = document.getElementById("salida");

salida.innerHTML = "Estudiantes aprobados: " + nombresDeAprobados(estudiantes);