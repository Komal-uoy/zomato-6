let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', () =>{
    document.querySelector('body').classList.toggle('menuActive')
    MenuBtn.classList.toggle('fa-xmark')
})
