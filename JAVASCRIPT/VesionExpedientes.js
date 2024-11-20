async function VerificarDatos() {

    const version = document.getElementById("VersionExpediente").value.trim(); 

    if (!version) {
        alert("SIN VERSIONES ANTERIORES.");
        return false; 
    }
    return true; 
}

async function obtenerVersionesExp() {

    const validacion = await VisualizarDocumentos();
    if (!validacion) {
        return; 
    }

    const url = "https://tu-api-url.com/api/VersionExpediente";

    try {
        const respuesta = await fetch(url, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (respuesta.ok) {
            const respuestaJson = await respuesta.json();

            if (respuestaJson.acceso) {
                alert("EXPEDIENTES!");

                respuestaJson.forEach((paciente) => {
                    const bt = document.createElement("tr");
                    bt.className = "paciente-expediente";
            
                    bt.innerHTML = `
                        <i class="fa-solid fa-user-pen fa-flip-horizontal fa-xs" style="color: #000000; margin-right: 8px;"></i>
                        Fecha de modificación: ${paciente.fecha}
                    `;
            
         
                    bt.addEventListener("click", () => {
                        window.location.href = "https://www.google.com"; // CAMBIAR A LA PANTALLA VER MAS.
                        bt.style.backgroundColor = "purple"; // CAMBIAR ESTE COLOR A UNO MAS ADECUADO.
                    });
            
                    contenedor.appendChild(bt);
                });

            } else {
                alert("Sin Versiones Anteriores");
            }
        } else {
            alert("Error en la respuesta de la API.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al conectar con la API.");
    }
}

//document.getElementById("HomePsicologo").addEventListener("click", obtenerDatos);
