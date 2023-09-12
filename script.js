function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a tag img
  if(html.classList.contains('light')) {
    // se tivver a light mode , adicionar a imagem light
    img.setAttribute('src', './assets/Avatar2.png') 

  }else {
   // se tiver sem light mode, manter a imagem default
   img.setAttribute('src', './assets/avatar.png')
  }
}