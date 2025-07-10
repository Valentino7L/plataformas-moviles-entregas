// 01 
function crearPersona(nombre, apellido, edad, documento) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento
    };
}

// 02 
function agregarApodo(persona, apodo) {
    const nuevaPersona = { ...persona };
    nuevaPersona.apodo = apodo;
    return nuevaPersona;
}

// 03 
function sinDocumento(persona) {
    const nuevaPersona = { ...persona };
    delete nuevaPersona.documento;
    return nuevaPersona;
}

// 04 
function tieneDocumento(persona) {
    return 'documento' in persona;
}

// 05 
function nombreCompletoDePersona(persona) {
    return `${persona.apellido}, ${persona.nombre}`;
}

// 06 
function felizCumpleaños(persona) {
    const nuevaPersona = { ...persona };
    nuevaPersona.edad += 1;
    return nuevaPersona;
}

// 07 
function sonLaMismaPersona(persona1, persona2) {
    return (
        persona1.nombre === persona2.nombre &&
        persona1.apellido === persona2.apellido &&
        persona1.edad === persona2.edad &&
        persona1.documento === persona2.documento
    );
}

// 08
function personaMasGrande(persona1, persona2) {
    return persona1.edad >= persona2.edad ? persona1 : persona2;
}
