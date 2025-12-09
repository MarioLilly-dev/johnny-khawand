<template>
  <section class="section2" id="section2">
    <div class="section2__bg"></div>

    <div class="container section2__content">

      <!-- INTRO -->
      <div class="section2__intro">
        <h2 class="title-xl heading-on-dark">Our Design Philosophy</h2>

        <p class="text-base text-on-dark section2__desc">
          Every line, shadow, and volume is crafted with intention.
          We create spaces that breathe, elevate, and reflect the lives within them.
        </p>
      </div>

      <!-- IMAGE CARDS -->
      <div class="section2__cards">
        <div class="card" v-for="(img, i) in images" :key="i">

          <!-- SAFE IMAGE LOADER -->
          <div class="card__img">
            <img :src="img" alt="concept" />
          </div>

          <p class="card__caption">Concept {{ i + 1 }}</p>

          <p class="card__subcaption">
            Crafted spaces where material, scale, and emotion intersect in harmony.
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

// SAFE STATIC IMAGES LOADER — guaranteed to work
const images = [
  "/assets/images/p1.jpg",
  "/assets/images/p2.jpg",
  "/assets/images/p1.jpg",
  "/assets/images/p2.jpg",
];

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Force recalculation once images are loaded
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 300);

  // INTRO REVEAL
  gsap.from(".section2__intro", {
    opacity: 0,
    y: 30,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".section2__intro",
      start: "top 95%",  // earlier trigger = reliable
      once: true
    }
  });

  // CARD REVEAL (guaranteed to fire)
  gsap.utils.toArray(".card").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      delay: index * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%", // more reliable than "top 80%"
        toggleActions: "play none none none",
        once: true
      }
    });
  });
});

</script>

<style scoped>
/* ============================
   SECTION WRAPPER
============================ */
.section2 {
  position: relative;
  padding: 18vh 0;
  min-height: 100vh;
  overflow: hidden;
  background: #000c1d;
}

/* ============================
   AMBIENT BACKGROUND
============================ */
.section2__bg {
  position: absolute;
  inset: -12%;
  width: 124%;
  height: 124%;
  background-image: url("/assets/images/hero.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.22;
  will-change: transform;
  z-index: 1;
}

.section2::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 2;
}

/* ============================
   CONTENT BLOCK
============================ */
.section2__content {
  position: relative;
  z-index: 3;
  max-width: 1100px;
  margin: 0 auto;
}

.section2__intro {
  margin-bottom: 8vh;
}

.section2__desc {
  max-width: 600px;
  font-size: 1.05rem;
  opacity: 0.75;
  line-height: 1.55;
  margin-top: 1rem;
}

/* ============================
   CARDS
============================ */
.section2__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
}

/* Card container */
.card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  padding-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.card:hover {
  transform: translateY(-6px);
}

/* SAFE IMAGE CONTAINER */
.card__img {
  width: 100%;
  height: 260px;
  overflow: hidden;
}

/* SAFE IMAGE */
.card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s ease;
  opacity: 0.95;
}

.card:hover .card__img img {
  transform: scale(1.04);
}

/* Text */
.card__caption {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-top: 1rem;
  opacity: 0.85;
}

.card__subcaption {
  font-size: 0.9rem;
  margin-top: 0.3rem;
  opacity: 0.65;
  color: white;
  line-height: 1.4;
}

/* ============================
   MOBILE
============================ */
@media (max-width: 900px) {
  .section2 {
    padding: 12vh 0;
  }

  .section2__cards {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .card__img {
    height: 220px;
  }
}
</style>
