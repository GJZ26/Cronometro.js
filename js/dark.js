const boton = document.getElementById('modo');
const body = document.body;

function toTheme(){
    if (boton.checked){
        start.classList.add('dark');
        stop.classList.add('dark');
        time.classList.add('dark');
        csec.classList.add('dark');
        mensaje.classList.add('dark');
        contenedorStart.classList.add('dark');
        contenedorCrono.classList.add('dark');
        pause.classList.add('dark');
        crono.classList.add('dark');
        body.classList.add('dark');
    }else{
        // Eliminar la clase Dark a los elementos
        start.classList.remove('dark');
        stop.classList.remove('dark');
        time.classList.remove('dark');
        csec.classList.remove('dark');
        mensaje.classList.remove('dark');
        contenedorStart.classList.remove('dark');
        contenedorCrono.classList.remove('dark');
        pause.classList.remove('dark');
        crono.classList.remove('dark');
        body.classList.remove('dark');
    }
}

boton.addEventListener('click',toTheme);