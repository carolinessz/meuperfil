// tres(3) contantes para refeenciar os ID das DIVS no projeto
const musica = document.getElementById('musica');
const luan = document.getElementById('luan');
const amor = document.getElementById('amor');

// tres(3) constantes para referenciar os ID dos iframes 
const videoMusica = document.querySelector('#videoMusica');
const videoLuan = document.querySelector('#videoLuan');
const videoAmor = document.querySelector('#videoAmor');

// evento do click 
musica.addEventListener('click', () =>{
    musica.classList.toggle('active'); 
    videoMusica.classList.toggle('active');
});

luan.addEventListener('click',() =>{
    luan.classList.toggle('active');
    videoLuan.classList.toggle('active');
});

amor.addEventListener('click', () =>{
    amor.classList.toggle('active');
    videoAmor.classList.toggle('active');
});

