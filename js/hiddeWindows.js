const contenedorStart = document.getElementById('contenedor1');
const contenedorCrono = document.getElementById('contenedor2');
const pause = document.getElementById('pause');
const crono = document.getElementById('crono');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hiddeStart (){
    contenedorCrono.style.display="";
    contenedorCrono.classList.remove('fadeOut');
    contenedorStart.classList.add('fadeOut');
    sleep(200).then(()=>{
        contenedorStart.style.display="none";
        contenedorStart.classList.remove('contenedor1');
    });
}

function hiddeCrono(){
    contenedorStart.classList.remove('fadeOut');
    contenedorCrono.classList.add('fadeOut');
    sleep(200).then(()=>{
        contenedorStart.style.display="";
        contenedorCrono.style.display="none";
        contenedorStart.classList.add('contenedor1');
    });
}

function setPaused(){
    if(pause.classList.contains('active')){
        pause.classList.remove('active');
    }else{
        pause.classList.add('active');
    }

    if(crono.classList.contains('paused')){
        crono.classList.remove('paused');
    }else{
        crono.classList.add('paused');
    }
}