const figureDiv = document.querySelectorAll('.figure');


const btnCarre = document.getElementById('carre');
const btnGiraffe = document.getElementById('giraffe')

btnCarre.addEventListener('click', () =>{
    figureDiv.forEach(figures => {
        figures.classList.remove('carre');
        figures.classList.remove('giraffe');
    })
})
btnGiraffe.addEventListener('click', () =>{
    figureDiv.forEach(figures => {
        figures.classList.add('giraffe');
        figures.classList.remove('carre');
    })
})