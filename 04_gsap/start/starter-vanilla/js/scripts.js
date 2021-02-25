gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('page ready')
  window.setTimeout(() => {
    document.body.classList.add('loaded')
  }, 1000)
})

	/* gsap.to('.life__content__circle', {
		scrollTrigger: {
			trigger: '.life__content__circle',
			toggleActions: 'restart reverse restart reverse',
			start: 'top 80%',
			end: 'bottom 20%',
			markers: true,
		},
		scale: 1,
		duration: 0.6,
	}) */