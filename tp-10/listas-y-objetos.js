var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

// 01
function ordenarPorApellido(listaDePersonas) {
    return [...listaDePersonas].sort((a, b) => a.apellido.localeCompare(b.apellido));
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

// 02
function soloNombres(listaDePersonas) {
    return listaDePersonas.map(persona => persona.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

// 03
function promedioEdades(listaDePersonas) {
    if (listaDePersonas.length === 0) return 0;
    const sumaEdades = listaDePersonas.reduce((total, persona) => total + persona.edad, 0);
    return sumaEdades / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

// 04
function cumplirAños(listaDePersonas) {
    return listaDePersonas.map(persona => ({
        ...persona,
        edad: persona.edad + 1
    }));
}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

// 05
function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(persona => persona.edad > 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

// 06
function laPersonaMayor(listaDePersonas) {
    return listaDePersonas.reduce((mayor, persona) => {
        return persona.edad > mayor.edad ? persona : mayor;
    }, listaDePersonas[0]);
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

// 07
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    return listaDePersonas.map((persona, index) => ({
        ...persona,
        heladoFavorito: listaDeHelados[index] || "vainilla"
    }));
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));

