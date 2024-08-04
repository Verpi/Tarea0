function showAlert(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const lname = document.getElementById('lname').value;
    const tel = document.getElementById('tel').value;
    const mail = document.getElementById('mail').value;
    const date = document.getElementById('date').value;
    const msg = document.getElementById('msg').value;

    alert(`Formulario enviado con éxito:
        Nombre: ${name}
        Apellido: ${lname}
        Teléfono: ${tel}
        Email: ${mail}
        Fecha: ${date}
        Mensaje: ${msg}`);
}
