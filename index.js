
const openNav = (event) => {

    let navBar = document.getElementsByTagName('nav')[0]
    navBar.style.transform = `translate(0px)`
    navBar.focus()
    let shadowBox = document.querySelector('.shadow-box')
    shadowBox.style.zIndex = '1';
    shadowBox.style.opacity = '0.5'

}

const closeNav = (event) => {
    
    let navBar = document.getElementsByTagName('nav')[0]
    navBar.style.transform = `translate(300px)`

    let shadowBox = document.querySelector('.shadow-box')
    shadowBox.style.opacity = '0'
    shadowBox.style.zIndex = '-1';

}

window.onload = () => {

    let navBar = document.getElementsByTagName('nav')[0]

    navBar.addEventListener('blur', closeNav)

}