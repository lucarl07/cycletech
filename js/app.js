// Componentes da página:
const sidebar = document.querySelector('.sidebar'),
darkFilter = document.querySelector('#divDarkFilter'),
mainContent = document.querySelector('.main');

// Botões:
const btnOpenSidebar = document.querySelector('#btnOpenSidebar'),
btnCloseSidebar = document.querySelector('#btnCloseSidebar'),
toggleButtons = document.querySelectorAll('.toggle');

// let isSidebarOpen = false;

// Ao clicar #btnToggleSidebar.toggle:
btnOpenSidebar.addEventListener('click', function() {
    sidebar.style.display = 'initial'
    darkFilter.style.display = 'initial'
    mainContent.style.position = 'fixed';
})
btnCloseSidebar.addEventListener('click', function() {
    sidebar.style.display = 'none'
    darkFilter.style.display = 'none'
    mainContent.style.position = 'initial';
})