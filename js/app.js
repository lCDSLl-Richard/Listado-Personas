const personas = [];

function mostrarPersonas(){

    let tag = '';

    for(persona of personas){

        tag += `<li>${persona.nombre} ${persona.apellido}</li>`

    }

    document.getElementById('personas').innerHTML = tag;

}

function agregarPersona(){

    const datos = document.getElementById('forma');

    let persona = new Persona(datos['nombre'].value, datos['apellido'].value);

    personas.push(persona);

    datos['nombre'].value = '';
    datos['apellido'].value = '';

    mostrarPersonas();

}