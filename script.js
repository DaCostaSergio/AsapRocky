
document.querySelector(".toggleDropDown").addEventListener('click', (() => {
    let element = document.querySelector('.dropdown-menu');
    const style = getComputedStyle(element);
    style.getPropertyValue('height') == '0px' ? 
            element.style.height = '300px' : element.style.height = '0px';
}));

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
    if (!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});