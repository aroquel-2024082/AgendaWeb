// Modal de Favoritos
// si se ponen en el mismo que el otro no funciona el de contactos

function mostrarDetalles(nombre,apellido,tel,img,correo,trabajo,estado,genero) {
    document.getElementById('m-nombre').innerText = nombre;
    document.getElementById('m-apellido').innerText = apellido;
    document.getElementById('m-tel').innerText = tel;
    document.getElementById('m-img').src = img;
    document.getElementById('m-correo').innerText = correo;
    document.getElementById('m-estado').innerText = estado;
    document.getElementById('m-genero').innerText = genero;
    document.getElementById('m-trabajo').innerText = trabajo;

    document.getElementById('modalFavorito').style.display = "flex";
}

function cerrarModal() {
    document.getElementById('modalFavorito').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modalFavorito');
    if (event.target == modal) {
        cerrarModal ();
    }
}


/* Ayuda Extra */
const verGenero = new MutationObserver(() => {
    const textoGenero = document.getElementById('m-genero').innerText;
    const cajaModal = document.querySelector('.modal-favorito');
    
    if (textoGenero === 'Mujer') {
        cajaModal.classList.add('modal-femenino');
    } else {
        cajaModal.classList.remove('modal-femenino');
    }
});

const elementoTarget = document.getElementById('m-genero');
if (elementoTarget) {
    verGenero.observe(elementoTarget, { childList: true });
}