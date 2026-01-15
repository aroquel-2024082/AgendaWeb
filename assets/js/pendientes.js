const entradaTarea = document.getElementById("tareaP");
const selectorPrio = document.getElementById("prioridad");
const botonAgregar = document.getElementById("agregar");
const listaContenedor = document.getElementById("contenedor-lista");
const modalFlotante = document.getElementById("modalOculto");

let misTareas = [];

botonAgregar.onclick = function() {
    let texto = entradaTarea.value.trim();
    if (texto === "") return;

    let nuevaTarea = {
        id: Date.now(),
        nombre: texto,
        nivel: selectorPrio.value
    };

    misTareas.push(nuevaTarea);
    entradaTarea.value = "";
    mostrarTareas();
};

function mostrarTareas() {
    listaContenedor.innerText = "";
    misTareas.sort((a, b) => a.nivel - b.nivel);

    misTareas.forEach(t => {
        const caja = document.createElement("div");
        caja.className = "tarjeta-tarea prio-" + t.nivel;

        const texto = document.createElement("span");
        texto.innerText = t.nombre;

        const grupoBotones = document.createElement("div");
        grupoBotones.className = "iconos";

        const btnEdit = document.createElement("button");
        const iconoE = document.createElement("i");
        iconoE.className = "bi bi-pencil-square color-editar";
        btnEdit.appendChild(iconoE);
        btnEdit.onclick = () => abrirEdicion(t);

        const btnDel = document.createElement("button");
        const iconoD = document.createElement("i");
        iconoD.className = "bi bi-trash color-borrar";
        btnDel.appendChild(iconoD);
        btnDel.onclick = () => {
            misTareas = misTareas.filter(item => item.id !== t.id);
            mostrarTareas();
        };

        grupoBotones.appendChild(btnEdit);
        grupoBotones.appendChild(btnDel);
        caja.appendChild(texto);
        caja.appendChild(grupoBotones);
        listaContenedor.appendChild(caja);
    });
}

function abrirEdicion(tarea) {
    modalFlotante.innerText = ""; 
    modalFlotante.classList.remove("modal-escondido");

    const cuadro = document.createElement("div");
    cuadro.className = "caja-edicion";

    const titulo = document.createElement("h3");
    titulo.innerText = "Modificar Tarea";

    const inputEdicion = document.createElement("input");
    inputEdicion.value = tarea.nombre;

    const selectEdicion = document.createElement("select");
    
    const niveles = [
        { valor: "1", texto: "Alta" },
        { valor: "2", texto: "Media" },
        { valor: "3", texto: "Baja" }
    ];

    niveles.forEach(nivelObj => {
        const opt = document.createElement("option");
        opt.value = nivelObj.valor;
        opt.innerText = nivelObj.texto;
        if (tarea.nivel === nivelObj.valor) opt.selected = true;
        selectEdicion.appendChild(opt);
    });

    const btnListo = document.createElement("button");
    btnListo.innerText = "Guardar";
    btnListo.className = "btn-guardar";
    btnListo.onclick = () => {
        tarea.nombre = inputEdicion.value;
        tarea.nivel = selectEdicion.value;
        modalFlotante.classList.add("modal-escondido");
        mostrarTareas();
    };

    const btnCerrar = document.createElement("button");
    btnCerrar.innerText = "Cancelar";
    btnCerrar.className = "btn-cerrar";
    btnCerrar.onclick = () => modalFlotante.classList.add("modal-escondido");

    cuadro.appendChild(titulo);
    cuadro.appendChild(inputEdicion);
    cuadro.appendChild(selectEdicion);
    cuadro.appendChild(btnCerrar);
    cuadro.appendChild(btnListo);
    modalFlotante.appendChild(cuadro);
}