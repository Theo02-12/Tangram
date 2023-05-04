let link;

function modeForme(cssUrl){
    if(link){
        link.remove();
    }
    link = document.createElement('link');
    link.href = cssUrl;
    link.rel = 'stylesheet';
    // link.setAttribute('disabled', false)
    document.head.appendChild(link);
}

const figure = document.querySelectorAll('.figure')
const btnThree = document.getElementById('btnFour');

btnThree.addEventListener('click', () => {

    console.log(figure);
    
    figure.forEach(figures => {
        figures.classList.add('vautour');
    })
})