const menuBoton = document.getElementById('menuBoton'); 
const menu = document.getElementById('menu');
const cerrarMenu = document.getElementById('cerrar'); 

// Funciones para abrir y cerrar el menú
function AbrirMenu() {
    menu.classList.add('active'); 
}
function CerrarMenu() {
    menu.classList.remove('active'); 
}

// Listeners para los botones
menuBoton.addEventListener('click', AbrirMenu);
cerrarMenu.addEventListener('click', CerrarMenu);


async function obtenerDatos() {
    const url = "https://tu-api-url.com/api/datosPacientes";
    const idPsicologo = localStorage.getItem('idPsicologo'); 

    if (!idPsicologo) {
        alert("ID del psicólogo no encontrado.");
        return;
    }

    const data = {
        idPsicologo: idPsicologo
    };

    try {
        const respuesta = await fetch(url, {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        });

        if (respuesta.ok) {
            const respuestaJson = await respuesta.json();

            if (respuestaJson.acceso) {
                alert("BIENVENIDO!");

                const tablaPacientes = document.getElementById("tabla-pacientes");

                respuestaJson.pacientes.forEach((paciente) => {
                    const fila = document.createElement("tr");
                    fila.onclick = () => window.location.href = paciente.url;

                    const celdaNombre = document.createElement("td");
                    celdaNombre.innerHTML = `<i class='bx bx-user'></i> ${paciente.nombre}`;
                    fila.appendChild(celdaNombre);

                    const celdaApellido = document.createElement("td");
                    celdaApellido.innerHTML = `<i class='bx bx-user'></i> ${paciente.apellido}`;
                    fila.appendChild(celdaApellido);

                    const celdaCedula = document.createElement("td");
                    celdaCedula.innerHTML = `<i class='bx bx-id-card'></i> ${paciente.cedula}`;
                    fila.appendChild(celdaCedula);

                    tablaPacientes.appendChild(fila);
                });
            } else {
                alert("Datos no encontrados.");
            }
        } else {
            alert("Error en la respuesta de la API.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al conectar con la API.");
    }
}


