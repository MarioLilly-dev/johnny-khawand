import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({
    duration: 0.8,
    smooth: true,
    smoothTouch: false,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    direction: 'vertical'
  })

  // RAF
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Sync ScrollTrigger with Lenis
  lenis.on('scroll', () => {
    ScrollTrigger.update()
  })

  return {
    provide: {
      lenis
    }
  }
})
