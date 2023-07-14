window.onscroll = () => {
  toggleTopButton();
}

function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}

function setSvgWidth() {
    var svg = document.getElementById('uptotop-svg');
    var screenWidth = window.innerWidth;


      // Set the width based on conditions
    if (screenWidth >= 768) {
      svg.setAttribute('width', '16');
      svg.setAttribute('height', '30');
    } else {
      svg.setAttribute('width', '8');
      svg.setAttribute('height', '16');
    }
}

window.addEventListener('resize', function() {
    setSvgWidth();
})

 // Initialize the width of the SVG image
setSvgWidth();