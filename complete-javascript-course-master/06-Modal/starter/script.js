'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// traversing node list-----------
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
// }

// ------adding event listner to nodelist----------
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', () => {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // instead of the above two line we can also do this below tow
    // modal.style.display = 'block';
    // overlay.style.display = 'block';
  });
}
// last second part---------------making the above code dry
// const openModal = () => {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }
// -----------without exporting the function------------
// for making the modal window close we will add event listner
// btnCloseModal.addEventListener('click', () => {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
// overlay.addEventListener('click', () => {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// so we don't want to use the same piece of code to be written in the btnCloseModal and overlay so we simply export the btncloseModal function.
// --------------exporting the function---------
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// notice we are not passing closeModal() as a second argument because it will immediately call the function instead we are passing the function without the parentheses because we want to call it as soon as the click happens and not before.

// ------------handing key press events ------------
// document.addEventListener('keydown', e => {
//   console.log('A key was pressed');
//   //   console.log(e);
//   console.log(e.key);
// });

// now we want to close the popup window only when the esc key is pressed
// we can check if an element has certain class
// modal.classList.contains('hidden');
document.addEventListener('keydown', e => {
  //   if (e.key === 'Escape') {
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }
  // we can aggregate the above two if blocks
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    console.log(e);
  }
});
