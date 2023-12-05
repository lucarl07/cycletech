// Componentes da página:
const sidebar = document.querySelector('.sidebar'),
darkFilter = document.querySelector('#divDarkFilter1'),
mainContent = document.querySelector('.main');

// Botões:
const btnOpenSidebar = document.querySelector('#btnOpenSidebar'),
btnCloseSidebar = document.querySelector('#btnCloseSidebar');

// Ao clicar #btnToggleSidebar.toggle:
btnOpenSidebar.addEventListener('click', function() {
    sidebar.style.display = 'initial'
    darkFilter.style.display = 'initial'
})
btnCloseSidebar.addEventListener('click', function() {
    sidebar.style.display = 'none'
    darkFilter.style.display = 'none'
})