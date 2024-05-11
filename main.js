function reproduceSonidoTecla(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for(let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;
    tecla.onclick = function(){
        reproduceSonidoTecla(idAudio);
    };
    tecla.onkeydown = function(){
        if(event.key == 'Enter' || event.key == 'Espacio'){
            tecla.classList.add('activa');
        }
    };
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    };
}

// while(contador < listaDeTeclas.length){
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#sonido_${instrumento}`;
//     tecla.onclick = function(){
//         reproduceSonidoTecla(idAudio);
//     };
//     contador++;
// }