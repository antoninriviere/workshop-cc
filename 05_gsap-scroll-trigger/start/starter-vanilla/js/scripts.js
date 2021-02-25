gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', (event) => {
  /*gsap.to('.life__content__circle', {
		scrollTrigger: {
			trigger: '.life__content__circle',
			toggleActions: 'restart reverse restart reverse',
			start: 'top 80%',
			end: 'bottom 20%',
			markers: true,
      onEnter: () => {
        // ici vous pouvez ajouter une classe en css
      },
      onLeave: () => {
        // ici vous pouvez ajouter une classe en css
      },
      onEnterBack: () => {
        // ici vous pouvez ajouter une classe en css
      },
      onLeaveBack: () => {
        // ici vous pouvez ajouter une classe en css
      },
		},
		scale: 1,
		duration: 0.6,
	})*/

  gsap.from('.hero__button', {
    scale: 0,
    duration: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.hero__button',
      start: 'top 100%',
      end: 'bottom 20%',
      markers: false,
      toggleActions: 'restart reverse restart reverse'
    }
  })

  gsap.to('.life__content__circle', {
    scale: 2,
    duration: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.life__content__circle',
      start: 'top 80%',
      end: 'bottom 20%',
      markers: false,
      toggleActions: 'restart reverse restart reverse'
    }
  })

  gsap.from(['.life__text'], {
    opacity: 0,
    y: 50,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.life__text',
      start: 'top 90%',
      end: 'bottom 10%'
    }
  })

  gsap.from('.life__title', {
    opacity: 0,
    y: 50,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.life__title',
      start: 'top 90%',
      end: 'bottom 10%'
    }
  })
})