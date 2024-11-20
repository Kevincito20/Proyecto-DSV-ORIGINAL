const pacientes = [
    { nombre: "Juan Pérez", edad: 34, registro: "12/01/2023", consulta: "10/10/2023", url: "RegistroJuanPerez.html" },
    { nombre: "María González", edad: 29, registro: "15/02/2023", consulta: "05/09/2023", url: "RegistroMariaGonzalez.html" },
    { nombre: "Carlos López", edad: 41, registro: "20/03/2023", consulta: "08/11/2023", url: "RegistroCarlosLopez.html" },
    { nombre: "Laura Martínez", edad: 25, registro: "18/04/2023", consulta: "12/10/2023", url: "RegistroLauraMartinez.html" },
    { nombre: "Juan Pérez", edad: 34, registro: "12/01/2023", consulta: "10/10/2023", url: "RegistroJuanPerez.html" },
    { nombre: "María González", edad: 29, registro: "15/02/2023", consulta: "05/09/2023", url: "RegistroMariaGonzalez.html" },
    { nombre: "Carlos López", edad: 41, registro: "20/03/2023", consulta: "08/11/2023", url: "RegistroCarlosLopez.html" },
    { nombre: "Laura Martínez", edad: 25, registro: "18/04/2023", consulta: "12/10/2023", url: "RegistroLauraMartinez.html" },
    { nombre: "Juan Pérez", edad: 34, registro: "12/01/2023", consulta: "10/10/2023", url: "RegistroJuanPerez.html" },
    { nombre: "María González", edad: 29, registro: "15/02/2023", consulta: "05/09/2023", url: "RegistroMariaGonzalez.html" },
    { nombre: "Carlos López", edad: 41, registro: "20/03/2023", consulta: "08/11/2023", url: "RegistroCarlosLopez.html" },
    { nombre: "Laura Martínez", edad: 25, registro: "18/04/2023", consulta: "12/10/2023", url: "RegistroLauraMartinez.html" }
];

// Referencia al cuerpo de la tabla
const tablaPacientes = document.getElementById("tabla-pacientes");

// Función para rellenar la tabla
function llenarTabla(datos) {
    datos.forEach(paciente => {
        // Crear una fila
        const fila = document.createElement("tr");
        fila.onclick = () => window.location.href = paciente.url;

        // Crear y añadir celdas
        const celdaNombre = document.createElement("td");
        celdaNombre.innerHTML = `<i class='bx bx-user'></i> ${paciente.nombre}`;
        fila.appendChild(celdaNombre);

        const celdaEdad = document.createElement("td");
        celdaEdad.textContent = paciente.edad;
        fila.appendChild(celdaEdad);

        const celdaRegistro = document.createElement("td");
        celdaRegistro.textContent = paciente.registro;
        fila.appendChild(celdaRegistro);

        const celdaConsulta = document.createElement("td");
        celdaConsulta.textContent = paciente.consulta;
        fila.appendChild(celdaConsulta);

        // Añadir la fila a la tabla
        tablaPacientes.appendChild(fila);
    });
}

// Llamar a la función para rellenar la tabla con los datos simulados
llenarTabla(pacientes);