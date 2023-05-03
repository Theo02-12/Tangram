const figureDiv = document.querySelectorAll('.figure');


const btnCarre = document.getElementById('carre');
const btnGiraffe = document.getElementById('giraffe')
const btnVautour = document.getElementById('vautour');


btnCarre.addEventListener('click', () =>{
    figureDiv.forEach(figures => {
        figures.classList.remove('carre');
        figures.classList.remove('giraffe');
        figures.classList.remove('vautour');
    })
})
btnGiraffe.addEventListener('click', () =>{
    figureDiv.forEach(figures => {
        figures.classList.add('giraffe');
        figures.classList.remove('carre');
        figures.classList.remove('vautour');
    })
})
btnVautour.addEventListener('click', () =>{
    figureDiv.forEach(figures => {
        figures.classList.add('vautour');
        figures.classList.remove('carre');
        figures.classList.remove('giraffe');
    })
})