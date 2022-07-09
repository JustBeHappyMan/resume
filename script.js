function toggleTheme() {
  const body = document.getElementById('body')

  if (body.classList.contains('theme-dark')) {
    body.classList.toggle("theme-light")
  } else {
    body.classList.toggle("theme-dark")
  }
}