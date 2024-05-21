const body = document.body
const themeButton = document.getElementById('theme-button')

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme')
})