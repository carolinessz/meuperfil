// tres constantes para referenciar as ITEM nas divs projetos
const Amarnãoépecado=document.getElementById('Amar não é pecado');
const Luansantana=document.getElementById('Luan santana');
const Meuamor=document.getElementById('Meu amor');

const videoAmarnãoépecado=document.querySelector('.videoAmarnãoépecado');
const videoLuansantana=document.querySelector('.videoLuansantana');
const videoMeuamor=document.querySelector('.videoMeuamor');

// evento de click
Amarnãoépecado.addEventListener('clik',()=>{
    Amarnãoépecado.classList.toggle('active');
    videoAmarnãoépecado.classList.toggle('active');
    videoLuansantana.classList.toggle('active');
    videoMeuamor.classList.toggle('active');
});

Luansantana.addEventListener('clik',()=>{
    Amarnãoépecado.classList.toggle('active');
    videoAmarnãoépecado.classList.toggle('active');
    videoLuansantana.classList.toggle('active');
    videoMeuamor.classList.toggle('active');
});

Meuamor.addEventListener('clik',()=>{
    Amarnãoépecado.classList.toggle('active');
    videoAmarnãoépecado.classList.toggle('active');
    videoLuansantana.classList.toggle('active');
    videoMeuamor.classList.toggle('active');