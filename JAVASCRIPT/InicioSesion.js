function ValidarCampos() {
    var usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("Contraseña").value;
    var errorUsuario = document.getElementById("mensajeError");

    errorUsuario.innerHTML = "";

    var esValido = true;

    if (usuario === "") {
        errorUsuario.innerHTML = "El campo usuario es obligatorio";
        esValido = false;
    }

    return esValido;
}

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