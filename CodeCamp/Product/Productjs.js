const links = document.querySelectorAll('.menu-link')
// Gather an array of data pertaining to all panels

links.forEach((link) => {
    link.addEventListener('mouseover',() => {
        removeActiveClasses()
        link.classList.add('active')
    })
})

function removeActiveClasses(){
    links.forEach((link) => {
          link.classList.remove('active')
    })
}