window.addEventListener('DOMContentLoaded', (event) => {
  console.log('page ready')
  window.setTimeout(() => {
    document.body.classList.add('loaded')
  }, 1000)
})