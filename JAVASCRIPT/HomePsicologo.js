//ESTO HACE QUE EL MENU SE DESPLIEGUE Y SE OCULTE
const menuBoton = document.getElementById('menuBoton'); 
const menu = document.getElementById('menu');
const cerrarMenu = document.getElementById('cerrar'); 

function AbrirMenu() {
    menu.classList.add('active'); 
}
function CerrarMenu() {
    menu.classList.remove('active'); 
}
menuBoton.addEventListener('click', AbrirMenu);
cerrarMenu.addEventListener('click', CerrarMenu);

//FETCH PARA TRAER LOS DATOS DE LOS PACIENTES DEPENDIENDO DEL PSICOLOGO
async function VisualizarDocumentos() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const cedula = document.getElementById("cedula").value.trim(); 

    if (!nombre || !apellido || !cedula) {
        alert("DATOS NO ENCONTRADOS.");
        return false; 
    }
    return true; 
}

async function obtenerDatos() {

    const validacion = await VisualizarDocumentos();
    if (!validacion) {
        return; 
    }

    const url = "https://tu-api-url.com/api/datosPacientes";

    try {
        const respuesta = await fetch(url, {
            headers: { 'Content-Type': 'application/json' }
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

document.getElementById("HomePsicologo").addEventListener("click", obtenerDatos);




