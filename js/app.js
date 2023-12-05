// Componentes da página:
const sidebar = document.querySelector('.sidebar'),
readQrCode = document.querySelector('.pop-up'),
mainContent = document.querySelector('.main');

// Filtros da página:
const darkFilter1 = document.getElementsByClassName('filter')[0],
darkFilter2 = document.getElementsByClassName('filter')[1];

/** PARA ACESSAR A NAVEGAÇÃO: **/
// Botões:
const btnOpenSidebar = document.querySelector('#btnOpenSidebar'),
btnCloseSidebar = document.querySelector('#btnCloseSidebar');

// Ao clicar em #btnOpenSidebar:
btnOpenSidebar.addEventListener('click', function() {
    sidebar.style.display = 'initial'
    darkFilter1.style.display = 'initial'
})

// Ao clicar em #btnCloseSidebar:
btnCloseSidebar.addEventListener('click', function() {
    sidebar.style.display = 'none'
    darkFilter1.style.display = 'none'
})

/** PARA LER UM QR CODE: **/
// Botões:
const btnOpenCamera = document.querySelector('#btnOpenCamera'),
btnExitCamera = document.querySelector('#btnExitCamera');

// Ao clicar em um botão .pop-up.flex-items.button:
btnOpenCamera.addEventListener('click', function() {
    readQrCode.style.display = 'flex'
    darkFilter2.style.display = 'initial'
})
btnExitCamera.addEventListener('click', function() {
    readQrCode.style.display = 'none'
    darkFilter2.style.display = 'none'
})