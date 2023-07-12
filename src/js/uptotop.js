window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// function toggleTopButton() {
//   if (document.body.scrollTop > 50 ||
//       document.documentElement.scrollTop > 50) {
//     document.getElementById('back-to-up').classList.remove('visually-hidden');
//   } else {
//     document.getElementById('back-to-up').classList.add('visually-hidden');
//   }
// }