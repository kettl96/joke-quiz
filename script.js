const btnYes = document.querySelector('.btn_yes')
const btnNo = document.querySelector('.btn_no')
const tittle = document.querySelector('h1')

btnYes.addEventListener('click', ()=>{
  tittle.textContent = 'Я так и знал!'
})
btnNo.addEventListener('click', ()=>{
  btnNo.style.display = 'none'
  tittle.textContent = 'Ответ неверный!'
  setTimeout(()=>{
    tittle.textContent = 'Ты дурак?'
  }, 2000)
})