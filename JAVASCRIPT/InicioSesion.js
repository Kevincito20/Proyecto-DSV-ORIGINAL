function ValidarCampos() {
    var usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("Contraseña").value;
    var errorUsuario = document.getElementById("mensaje-error");

    errorUsuario.innerHTML = "";

    var esValido = true;

    if (usuario === "" || contraseña === "") {
        errorUsuario.innerHTML = "Los campos usuario y contraseña son obligatorios";
        esValido = false;
    }else{
        errorUsuario.innerHTML = "Usuario o contraseña incorrectos";
    }

    return esValido;
}

document.addEventListener('DOMContentLoaded', cargarExpedientes);

async function cargarExpedientes() {
    const idPsicologo = localStorage.getItem('idPsicologo');
    if (idPsicologo) {
        await obtenerDatos(idPsicologo);
    } else {
        alert("No se encontró el ID del psicólogo.");
    }
}

async function obtenerDatos(idPsicologo) {
    const validacion = await VisualizarDocumentos();
    if (!validacion) {
        return; 
    }

    const url = `https://tu-api-url.com/api/datosPacientes?idPsicologo=2`;

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

menuBoton.addEventListener('click', AbrirMenu);
cerrarMenu.addEventListener('click', CerrarMenu);

//metodo para autenticar usuario
async function AutenticarUsuario() {
    if (!ValidarCampos()) {
        return;
    }

    var usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("Contraseña").value;

    var url = "https://tu-api-url.com/api/autenticar"; 
    var data = {
        "Usuario": usuario,
        "Contraseña": contraseña
    };

    try {
        var respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (respuesta.ok) {
            var respuestaJson = await respuesta.json();
            if (respuestaJson.autenticado) {
                idPsicologo = respuestaJson.idPsicologo;
                alert("Bienvenido");
                window.location.href = "HomePrincipal.html";
            } else {
                alert("Usuario o clave incorrectos");
            }
        } else {
            alert("Error en la respuesta");
        }
    } catch (error) {
        console.log("Error: " + error);
    }
}

document.getElementById("iniciarSesion").addEventListener("click", AutenticarUsuario);