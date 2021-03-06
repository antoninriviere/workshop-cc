// l'évènement qui nous permet d'executer notre js en étant sur que le document est prêt
window.addEventListener("DOMContentLoaded", (event) => {
  // on appelle notre première fonction
  addMouseListener()
  // on doit écouter le resize de la fenetre car notre calcul se base sur la largeur et hauteur de la fenetre qui changent quand on resize
  // donc pareil on va faire une fonction custom
  addResizeListener()
})

var mouseX, mouseY, ratioMouseX, ratioMouseY
var windowWidth = window.innerWidth
var windowHeight = window.innerHeight

// On sauvegarde nos valeurs dans un objet, l'élément de dom ainsi que sa valeur de translate max en X et en Y en pixels
var parallaxe1 = {
  elem: document.querySelector('.parallaxe-1'), // notre element, celui qu'on transformera
  maxX: 20, // sa valeur max à gauche (-50 ici) et à droite (50 ici) selon la souris
  maxY: 20, // sa valeur max en haut (-50 ici) et en bas (50 ici) selon la souris
  direction: -1 // direction est -1 ou 1. Si 1, suit la souris (se décale à gauche quand souris part à gauche). Si -1, va dans la direction inverse de la souris
}
// On refait la même pour tous nos parallaxes
var parallaxe2 = {
  elem: document.querySelector('.parallaxe-2'),
  maxX: 30,
  maxY: 10,
  direction: 1
}
// same
var parallaxe3 = {
  elem: document.querySelector('.parallaxe-3'),
  maxX: 60,
  maxY: 40,
  direction: 1
} 

// une fonction qui va écouter le mouvement de la souris dans la fenetre
function addMouseListener() {
  // on écoute le mouvement de la souris sur toute la fenetre
  window.addEventListener('mousemove', function(event) {
    // on récupère la valeur x de la souris en px
    mouseX = event.clientX
    // on récupère la valeur y de la souris en px
    mouseY = event.clientY
    // le ratio en X depuis le centre entre -0.5 et 0.5
    ratioMouseX = (mouseX - windowWidth / 2) / windowWidth
    // le ratio en Y depuis le centre entre -0.5 et 0.5
    ratioMouseY = (mouseY - windowHeight / 2) / windowHeight

    // on appelle notre foncton qui update le parallaxe une fois par objet
    updateParallaxeElem(parallaxe1)
    updateParallaxeElem(parallaxe2)
    updateParallaxeElem(parallaxe3)
  })
}

// on fait une autre fonction qui va déplacer chaque évenement de parallaxe quand on va l'appeler
// et qui prend en paramètre nos objet avec nos infos de parallaxe
function updateParallaxeElem(parallaxeObject) {
  var translateX = parallaxeObject.maxX * 2 * ratioMouseX * parallaxeObject.direction
  var translateY = parallaxeObject.maxY * 2 * ratioMouseY * parallaxeObject.direction

  // on arrondit à 3 chiffres après la virgule pour l'opti, pas obligé mais better
  translateX = Math.round(translateX * 1000) / 1000
  translateY = Math.round(translateY * 1000) / 1000

  parallaxeObject.elem.style.transform = `translate3d(${translateX}px, ${translateY}px, 0px)`
}

// La fonction qui va écouter le resize de la fenetre
function addResizeListener()
{
  window.addEventListener('resize', function(event) {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
  })
}