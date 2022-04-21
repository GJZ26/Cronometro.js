const start = document.getElementById('empezar');
const stop = document.getElementById('stop');
const time = document.getElementById('time');
const csec = document.getElementById('csec');
const mensaje = document.getElementById('mensaje');

let h=0,m=0,s=0,ms=0,finalTime;
var cronoInterval;

function empezar(){
    hiddeStart();
    cronoInterval=setInterval('udateCrono()',10);
}

function pausar(){
    setPaused();
    if(crono.classList.contains('paused')){
        clearInterval(cronoInterval);
    }else{
        cronoInterval=setInterval('udateCrono()',10);
    }

}

function detener(){
    hiddeCrono();
    sleep(200).then(()=>{
        clearInterval(cronoInterval);
        reset();
    });
    mensaje.innerHTML="Tú último tiempo fue de: <br>"+finalTime;
    sleep(20000).then(()=>{
        mensaje.textContent="Da click para comenzar";
    });
}

function udateCrono(){
    ms++;
    if(ms>=100){
        s++;
        ms=0
    }
    if(s>=60){
        m++;
        s=0;
    }
    if (m>=60){
        h++;
        m=0;
    }
    finalTime=time.textContent=("0"+h).slice(-2)+":"+("0"+m).slice(-2)+":"+("0"+s).slice(-2);
    finalTime+=csec.textContent="."+("0"+ms).slice(-2);
}

function reset(){
    h=0; m=0; s=0; ms=0;
    crono.classList.remove('paused');
    pause.classList.remove('active');
    time.textContent="00:00:00"
    csec.textContent=".00";
}

console.log("Versión 1.1.0\nDescargue el repositorio aquí: https://github.com/GJZ26/Cronometro.js");

start.addEventListener('click',empezar);
stop.addEventListener('click',detener);
pause.addEventListener('click',pausar);