// Componentes da página:
const sidebar = document.querySelector('.sidebar'),
darkFilter = document.querySelector('#divDarkFilter'),
mainContent = document.querySelector('.main');

// Botões:
const btnToggle = document.querySelector('#btnToggleSidebar');

// Ao clicar #btnToggleSidebar.toggle:
btnToggle.addEventListener('click', function() {
    sidebar.style.display = 'initial'
    darkFilter.style.display = 'initial'
    mainContent.style.position = 'fixed';
})