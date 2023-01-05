const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const navigation = document.querySelector('#navigation')

function menuOpen() {
  navigation.classList.add('show')
}

function menuClose() {
  navigation.classList.remove('show')
}
