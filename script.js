'use strict';

//variables 
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const bntShowModal = document.querySelectorAll('.show-modal')

//events
for(let i = 0 ; i< bntShowModal.length; ++i)
    bntShowModal[i].addEventListener('click', () =>{

        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
   })


    const close = function() {
      modal.classList.add('hidden')
      overlay.classList.add('hidden')
    }

    btnCloseModal.addEventListener('click', ()=>{
      modal.classList.add('hidden')
      overlay.classList.add('hidden')
    })
    overlay.addEventListener('click', ()=>{
      modal.classList.add('hidden')
      overlay.classList.add('hidden')
})



document.addEventListener('keydown', (e)=>{
  switch (e.key){
    case "Enter":
      console.log('Enter Was Pressed')
    case "Escape":
      modal.classList.add('hidden')
      overlay.classList.add('hidden') 


  }
})


    