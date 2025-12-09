<template>
  <section class="section2" id="section2">
    <div class="section2__bg"></div>

    <div class="container section2__content">

      <!-- TEXT -->
      <h2 class="title-xl heading-on-dark section2__title">
        Our Design Philosophy
      </h2>

      <p class="text-base text-on-dark section2__desc">
        Every line, shadow, and volume is crafted with intention.
        We create spaces that breathe, evolve, and reflect the lives within them.
      </p>

      <!-- IMAGE CARDS -->
      <div class="section2__cards">

        <div class="card" v-for="n in 4" :key="n">
          <div class="card__img" :style="{ backgroundImage: `url(/assets/images/hero-1.jpg)` }"
            >
          </div>

          <p class="card__caption text-md" style="font-weight: 600;">
            Concept {{ n }}
          </p>

          <p class="card__subcaption" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsa maxime est non dolor tenetur?
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const getImage = (n) =>
  new URL(`../assets/images/hero-1.jpg`, import.meta.url).href;


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  /* BACKGROUND PARALLAX */
  gsap.to(".section2__bg", {
    yPercent: 18,
    ease: "none",
    scrollTrigger: {
      trigger: "#section2",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.3,
    },
  });

  /* TEXT REVEAL */
  gsap.from(".section2__content", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section2",
      start: "top 75%",
    },
  });

  /* STAGGERED CARD REVEAL */
  gsap.from(".card", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.18,
    scrollTrigger: {
      trigger: ".section2__cards",
      start: "top 85%",
    },
  });
});
</script>

<style scoped>
.section2 {
  position: relative;
  padding: 10vh 0;
  overflow: hidden;
  min-height: 100vh;
}

/* Background */
.section2__bg {
  position: absolute;
  inset: -10%;
  width: 120%;
  height: 120%;
  background-image: url("/assets/images/hero.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.85;
  will-change: transform;
  z-index: 1;
}

/* Overlay */
.section2::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 2;
}

/* TEXT CONTENT */
.section2__content {
  position: relative;
  z-index: 3;
  max-width: 75%;
}

.section2__title {
  margin-bottom: var(--space-sm);
}

.section2__desc {
  max-width: 650px;
  font-size: 17px;  
  line-height: 1.6;
}

/* =============================
   IMAGE CARDS
============================== */
.section2__cards {
  margin-top: var(--space-xl);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.card { 
  position: relative;
  max-width: 100%;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transform: translateZ(0);
  background-color: var(--color-bg-light);
}

.card__img {
  width: 100%;
  height: 260px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

.card:hover .card {
  transform: scale(1.07);
}

.card__caption {
  margin-top: var(--space-sm);
  font-size: 15px;
  opacity: 0.85;
}

.card__subcaption {
  margin-top: var(--space-sm);
  font-size: 13px;
  opacity: 0.85;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .section2 {
    padding: 12vh 0;
  }

  .section2__cards {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .card__img {
    height: 220px;
  }
}
</style>
