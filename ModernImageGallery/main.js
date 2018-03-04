const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

// remove fading class after animation ends
current.addEventListener('animationend', () => {
  current.classList.remove('fade-in');
});

function imgClick(e) {
  // change image to clicked one
  current.src = e.target.src;

  // resets the opacity and change the clicked one to opacity var
  imgs.forEach(img => img.style.opacity = 1);
  e.target.style.opacity = opacity;

  // add fading class
  current.classList.add('fade-in');
}
