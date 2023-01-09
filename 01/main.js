function onScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function toggleMenu() {
  document.body.classList.toggle('menu-expanded')
}

// scrollreveal

ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 1000
}).reveal(`
  #home, #home img, #home .stats,
  #services, #services .card, #services .cards,
  #about, #about p, #about img
`)
