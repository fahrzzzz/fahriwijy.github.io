const barsIcon = document.getElementById('bars-icon');
const navbar = document.querySelector('.navbar');

barsIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const mixer = mixitup(".portfolio__grid");