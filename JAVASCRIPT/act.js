function ValidarCampos() {
    var descripcion = document.getElementById("descripcion").value;
    var cuadroClinico = document.getElementById("cuadro_clinico").value; 

    if (descripcion === "" || cuadroClinico === "") {
        alert("No puede dejar los campos vacíos");
        return false; // Retorna false si los campos están vacíos
    }
    return true; // Retorna true si los campos están llenos
}


document.getElementById("btnActualizar").addEventListener("click", EnviarActualizacion);
async function EnviarActualizacion() {
    if (!ValidarCampos()) {
        return;
    }

    var descripcion = document.getElementById("descripcion").value;
    var cuadroClinico = document.getElementById("cuadro_clinico").value; 
    const url = "https://tu-api-url.com/api/actualizar"; // Asegúrate de que la URL sea correcta

    var data = {
        "descripcion": descripcion,
        "cuadroClinico": cuadroClinico
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
            if (respuestaJson.success) { 
                window.location.href = "HTML/VersionExpedientes.html";
            } else {
                alert("Error al actualizar los datos.");
            }
        } else {
            alert("Error en la respuesta de la API.");
        }
    } catch (error) {
        console.log("Error: " + error);
        alert("Ocurrió un error al conectar con la API.");
    }
}
