
// VARIABLE GLOBARL PARA GUARDAR EL NOMBRE. EN ESTE CASO SE CAMBIA POR EL ID DEL PSICOLOGO.

let userSeleccionado = null;

async function ObtenerExpedientes() {
    const url = "https://jsonplaceholder.typicode.com/users"; 

    try {
        
        const response = await fetch(url);
        const users = await response.json();
        const contenedorV = document.getElementById("cont-version");
        
        
        contenedorV.innerHTML = '';

        users.forEach((user) => {
            const element = document.createElement('div'); 
            element.className = "paciente-expediente";

            // VAINA PARA PASAR EL ID DEL PSICOLOGO.
            element.addEventListener('click', () =>{
                userSeleccionado = user;
                console.log("man seleccionado:", userSeleccionado.id);
            })
            element.innerHTML = `
                <i class="fa-solid fa-user-pen fa-flip-horizontal fa-xs" style="color: #000000; margin-right: 8px;"></i>
                Fecha de modificación: ${user.username}, ${user.name}
            `;

            contenedorV.appendChild(element);
        });
    }
    catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al conectar con la API.");
    }
}

// Asegúrate de llamar a la función cuando el DOM esté cargado (ME FALTABA ESTA CUECA')
document.addEventListener('DOMContentLoaded', ObtenerExpedientes);

async function enviarUsuario() {
    
    if(!userSeleccionado){
        alert("selecciona un usuario, o un fucking id");
        return;
    }

    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userSeleccionado)
        });

        const resultado = await respuesta.json();
        console.log("respuesta del servidor:", resultado);
        
    } catch (error) {
        console.error("error al enviar usuario.", Error);
    }
}