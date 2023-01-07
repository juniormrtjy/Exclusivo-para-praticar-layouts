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
