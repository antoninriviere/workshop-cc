// l'évènement qui nous permet d'executer notre js en étant sur que le document est prêt
window.addEventListener("DOMContentLoaded", (event) => {
  // on appelle notre fonction
  addLottieAnim()
})

// on fait une fonction pour que ce soit plus propre
function addLottieAnim() {

  // on séléctionne avant l'elem qui va accueillir l'anim
  var elem = document.querySelector('.animation')

  lottie.loadAnimation({
    container: elem, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'anims/anim1.json' // the path to the animation json
  })
}

// pour voir l'anim, il faut lancer un serveur http, le plus simple étant de se positionner dans notre directory avec le terminal et de lancer
// python -m SimpleHTTPServer 8080 puis d'y accéder à 0.0.0.0:8080