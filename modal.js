// Modal - JS

const modal = () => {

  var modal = document.getElementsByClassName('modal')[0],
      trigger = document.getElementsByClassName('modal-trigger')[0],
      close = document.getElementsByClassName('modal__close'); // we loops this to catch the different closers

  closeModal = () => {
    modal.classList.remove('modal--show');
    modal.classList.add('modal--hide');
    // Remove hide class after animation is done
    afterAnimation = () => {
      modal.classList.remove('modal--hide');
    }
    // This listens for the CSS animations to finish and then hides the modal
    modal.addEventListener("webkitAnimationEnd", afterAnimation, false);
    modal.addEventListener("oAnimationEnd", afterAnimation, false);
    modal.addEventListener("msAnimationEnd", afterAnimation, false);
    modal.addEventListener("animationend", afterAnimation, false);
  }

  // Open the modal 
  trigger.onclick = () => {
    modal.classList.add('modal--show');
  }

  // Close the modal with any element with class 'modal__close'
  for (var i=0; i < close.length; i++) {
    close[i].onclick = () => {
      closeModal();
    }
  }

  // Click outside of the modal and close it
  window.onclick = e => {
    if (e.target == modal) {
      closeModal();
    }
  }

  // Use the escape key to close modal
  document.onkeyup = e => {
    e = e || window.event;
    if(modal.classList.contains('modal--show')) {
      if(e.keyCode == 27) {
        closeModal();
      }
    }
  }

};
modal();


// const playVideo = () => {
//   let vidOne = document.getElementById('videoOne');
//   let stop = modal(this.closeModal())
//   vidOne.play();
//   stop.pause();

// }

// playVideo();