const menu = document.querySelector('#mobile-menu') // Selects the mobile menu button
const menuLinks = document.querySelector('.navbar__menu') // Selects the navigation menu links

menu .addEventListener('click', function() 
{
    menu.classList.toggle('is-active') // Toggles the 'is-active' class on the menu button
    menuLinks.classList.toggle('active') // Toggles the 'active' class on the navigation menu links
} )