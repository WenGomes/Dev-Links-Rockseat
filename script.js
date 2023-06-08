function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*
if (html.classList.contains('light')) {
html.classList.remove('light')  
} else {
  html.classList.add('light')
}
*/

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar 2.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  const imagem = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    imagem.setAttribute("alt", "Wender e Sam")
  } else {
    imagem.setAttribute("alt", "Foto do Wender de óculos")
  }
}
