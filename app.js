
let btnGiraffe = document.getElementById('btnFour');
let btnCarre = document.getElementById('btnOne');
let btnCat = document.getElementById('btnTwo');
let btnButterfly = document.getElementById('btnThree');
let btnAvion = document.getElementById('btnFive');
let btnBird = document.getElementById('btnSix');
let btnPoint = document.getElementById('btnSeven');
let figures = document.querySelectorAll('.figure');
const scrtBtn = document.createElement('button');
const scrtLink = document.createElement('link');
const divBtn = document.querySelector('.buttons')

scrtLink.rel = 'stylesheet'
scrtLink.href = 'css/secret.css'

scrtBtn.innerHTML = 'Secret'

document.head.appendChild(scrtLink);
divBtn.appendChild(scrtBtn);

btnCarre.innerHTML = 'Carré';
btnCat.innerHTML= 'Chat';
btnButterfly.innerHTML= 'Pappillon';
btnGiraffe.innerHTML = 'Giraffe';
btnAvion.innerHTML = 'Avion';
btnBird.innerHTML = 'Oiseau';
btnPoint.innerHTML = 'Point';



function animals(classe) {
    figures.forEach(elements => {
        elements.classList.remove('giraffe', 'cat','butterfly', 'bird','avion' ,'carre', 'secret', 'point')
        elements.classList.add (classe)
    })
}
btnCarre.addEventListener('click', () => {
    animals('carre')
    
})
btnGiraffe.addEventListener('click', () => {
    animals('giraffe')
})
btnCat.addEventListener('click', () => {
   
    animals('cat')
})
btnButterfly.addEventListener('click', () => {
    animals('butterfly')
})

btnBird.addEventListener('click', () => {
    animals('bird')
})

btnAvion.addEventListener('click', () => {
    animals('avion') 
})
scrtBtn.addEventListener('click', () => {
    animals('secret') 
})
btnPoint.addEventListener('click', () => {
    animals('point') 
})