function mostrarDetalles(nombre,apellido,tel,img,correo,trabajo,estado,genero) {
    document.getElementById('m-nombre').innerText = nombre;
    document.getElementById('m-apellido').innerText = apellido;
    document.getElementById('m-tel').innerText = tel;
    document.getElementById('m-img').src = img;
    document.getElementById('m-correo').innerText = correo;
    document.getElementById('m-estado').innerText = estado;
    document.getElementById('m-genero').innerText = genero;
    document.getElementById('m-trabajo').innerText = trabajo;

    document.getElementById('modalContacto').style.display = "flex";
}

function cerrarModal() {
    document.getElementById('modalContacto').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modalContacto');
    if (event.target == modal) {
        cerrarModal();
    }
}
