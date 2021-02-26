// l'évènement qui nous permet d'executer notre js en étant sur que le document est prêt
window.addEventListener("DOMContentLoaded", (event) => {
  // on appelle notre fonction quand le document est prêt
  positionCircleDots()
})

// On créé une fonction pour que ce soit plus propre
function positionCircleDots() {
  // on séléctionne tous les points du html
  var circlePoints = document.querySelectorAll('.circle-point')
  // on récupère du cercle
  var circle = document.querySelector('.circle')
  // le rayon sera égal à la moitié de la width du cercle
  var rayon = circle.offsetWidth / 2
  // on boucle sur tous ces points pour calculer l'angle de chaque
  for(let i = 0; i < circlePoints.length; i++)
  {
    var currentCircle = circlePoints[i]
    // Un tour complet = 360deg ou 2 * Math.PI, ensuite on le divise par le nombre de points, comme ça on saura
    // qu'on decale chaque point du nombre de degrés (ex, si 10 points, chacun sera  à 36deg)
    // Ensuite on le multiplie par i, son index, ainsi on aura le 1 à 0deg, le 2 à 36deg, le 3 à 72 deg, etc...
    var angle = (2 * Math.PI / circlePoints.length) * i
    // une fois qu'on a un angle en radian, on peut récupérer le x et le y grâce aux cosinus / sinus et le rayon 
    var x = rayon * Math.cos(angle)
    var y = rayon * Math.sin(angle)
    console.log(rayon, angle)
    // on applique les valeurs x et y a notre current circle
    currentCircle.style.transform = `translate(${x}px, ${y}px)`
  }
}