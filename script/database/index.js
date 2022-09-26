const btnModal = document.querySelectorAll('[data-modal-control]');
console.log(btnModal)

for (let i = 0; i < btnModal.length; i++) {

  btnModal[i].addEventListener('click', ()=> {
  
    let event = btnModal[i].getAttribute('data-modal-control');
    console.log(event);

    console.log(btnModal[i].querySelector(event))

    console.log()
  
  })

}

// Ainda em construção!!
