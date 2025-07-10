// 01
function invertirLista(listaDeNumeros) {
    return [...listaDeNumeros].reverse();
}

// 02
function sumarLista(listaDeNumeros) {
    return listaDeNumeros.reduce((acc, num) => acc + num, 0);
}

// 03
function contarElementosLista(listaDeNumeros) {
    return listaDeNumeros.length;
}

// 04
function calcularPromedio(listaDeNumeros) {
    if (listaDeNumeros.length === 0) return 0;
    return sumarLista(listaDeNumeros) / listaDeNumeros.length;
}

// 05
function triplicarLista(listaDeNumeros) {
    return listaDeNumeros.map(num => num * 3);
}

// 06
function crearListaDeNumeros(inicio, fin) {
    const lista = [];
    for (let i = inicio; i <= fin; i++) {
        lista.push(i);
    }
    return lista;
}

// 07
function ordenarDeMayorAMenor(listaDeNumeros) {
    return [...listaDeNumeros].sort((a, b) => b - a);
}

// 08
function encontrarNumeroMayor(listaDeNumeros) {
    return Math.max(...listaDeNumeros);
}

// 09
function ordenarPalabrasPorLongitud(listaDePalabras) {
    return [...listaDePalabras].sort((a, b) => a.length - b.length);
}

// 10
function encontrarPalabraMasCorta(listaDePalabras) {
    return ordenarPalabrasPorLongitud(listaDePalabras)[0];
}

// 11
function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(num => num > 0);
}

// 12
function contarAprobados(listaDeNotas) {
    return listaDeNotas.filter(nota => nota >= 6).length;
}

// 13
function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(Boolean);
}

// 14
function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) return "";
    if (listaDePalabras.length === 1) return listaDePalabras[0] + ".";

    const ultima = listaDePalabras.pop();
    const oracion = listaDePalabras.join(", ") + " y " + ultima;
    return oracion.charAt(0).toUpperCase() + oracion.slice(1) + ".";
}
