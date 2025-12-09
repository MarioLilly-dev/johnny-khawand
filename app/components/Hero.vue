<template>
  <section class="hero hero--overlay">
    <div class="hero__bg"></div>

    <div class="container hero__content">
      <div class="hero__left" id="hero-left">
        <p class="text-base text-on-dark">Whatever you feel</p>
        <h1 class="title-xxxl heading-on-dark hero__title">
          WE DESIGN<br />THE FEELING<br />OF YOU
        </h1>
      </div>

      <div class="hero__right" id="hero-right">
        <p class="text-base text-on-dark hero__desc">
          We guide your spatial experience, one step at a time,
          toward a space crafted uniquely for you.
        </p>

        <button class="cta-btn btn btn-primary">
          Get my design
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let handleMouseMove = null;

onMounted(() => {
  /* Intro Animations */
  gsap.from(".hero__bg", {
    opacity: 0,
    scale: 1.1,
    duration: 1.8,
    ease: "power4.out",
  });

  gsap.from("#hero-left", {
    opacity: 0,
    y: 40,
    duration: 1.4,
    ease: "power4.out",
    delay: 0.2,
  });

  gsap.from("#hero-right", {
    opacity: 0,
    y: 40,
    duration: 1.4,
    ease: "power4.out",
    delay: 0.45,
  });

  /* SCROLL PARALLAX synced with Lenis */
  gsap.to(".hero__bg", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.4,
    },
  });

  /* MOUSE PARALLAX */
  handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    gsap.to(".hero__bg", {
      x,
      y,
      duration: 1.5,
      ease: "power3.out",
    });
  };

  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  if (handleMouseMove) {
    window.removeEventListener("mousemove", handleMouseMove);
  }
});
</script>

<style scoped>
/* =============================
   HERO LAYOUT
============================= */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
}

/* Background (oversized for parallax) */
.hero__bg {
  position: absolute;
  inset: -8%;
  width: 116%;
  height: 116%;
  background-image: url("/assets/images/hero-1.jpg");
  background-size: cover;
  background-position: center;
  will-change: transform;
  z-index: 1;
}

/* Overlay */
.hero--overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  z-index: 2;
}

/* =============================
   CONTENT GRID
============================= */
.hero__content {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: var(--space-xl);
  width: 100%;
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xxl);
}

/* LEFT */
.hero__left {
  margin-top: 14vh;
}

.hero__title {
  margin-top: var(--space-sm);
  line-height: 0.95;
  letter-spacing: -1px;
}

/* RIGHT */
.hero__right {
  align-self: flex-end;
  margin-left: auto;
  max-width: 280px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.hero__desc {
  margin-bottom: var(--space-md);
  font-size: 15px;
}

/* =============================
   RESPONSIVE
============================= */
@media (max-width: 900px) {
  .hero__content {
    grid-template-columns: 1fr;
    text-align: center;
    padding-bottom: var(--space-xl);
  }

  .hero__left {
    margin-top: 10vh;
  }

  .hero__right {
    margin: 0 auto;
    align-items: center;
    max-width: 100%;
  }

  .hero__title {
    font-size: 12vw;
  }
}
</style>
