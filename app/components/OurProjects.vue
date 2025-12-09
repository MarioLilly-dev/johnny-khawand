<template>
  <section id="projects" class="projects">

    <div class="container">
      <!-- INTRO -->
      <div class="section2__intro">
        <h2 class="title-xl heading-on-dark">Our Projects</h2>

        <p class="text-base text-on-dark section2__desc">
          Every line, shadow, and volume is crafted with intention.
          We create spaces that breathe, elevate, and reflect the lives within them.
        </p>
      </div>

        <!-- HORIZONTAL PIN -->
        <div class="projects__pin">
        <div class="projects__row">

            <div
            class="project-card"
            v-for="(project, i) in projects"
            :key="i"
            >
            <div
                class="project-card__img"
                :style="{ backgroundImage: `url(${project.image})` }"
            ></div>

            <div class="project-card__info">
                <h3 class="project-card__title">{{ project.title }}</h3>
                <p class="project-card__meta">{{ project.meta }}</p>
            </div>
            </div>

        </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Hillside Residence", meta: "Interior Architecture — Lebanon", image: "/assets/images/p1.jpg" },
  { title: "Serenity Villa", meta: "Architecture — UAE", image: "/assets/images/p2.jpg" },
  { title: "Modern Loft", meta: "Interior Design — Cyprus", image: "/assets/images/p1.jpg" },
  { title: "Urban Penthouse", meta: "Renovation — Lebanon", image: "/assets/images/p2.jpg" },
  { title: "Mediterranean Escape", meta: "Vacation Home — Greece", image: "/assets/images/p1.jpg" },
];

onMounted(() => {
  const row = document.querySelector(".projects__row");
  const totalWidth = row.scrollWidth;
  const viewportWidth = window.innerWidth;
  const scrollDistance = totalWidth - viewportWidth;

  /* Fade intro in */
  gsap.from(".projects__intro", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#projects",
      start: "top 85%",
    },
  });

  /* Horizontal scroll */
  gsap.to(".projects__row", {
    x: -scrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: ".projects__pin",
      pin: true,
      scrub: 1.2,
      start: "top top",
      end: () => `+=${scrollDistance}`,
    },
  });

  /* Card reveal */
  gsap.from(".project-card", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".projects__pin",
      start: "top 90%",
    },
  });
});
</script>

<style scoped>
.projects {
  position: relative;
  padding-top: 16vh;
  background: #000c1d;
  color: white;
}

/* TITLE BLOCK (no overlap now) */
.projects__intro {
  margin-bottom: 10vh;
  text-align: center;
}

.projects__subtitle {
  margin-top: 0.6rem;
  opacity: 0.8;
}

/* PINNED HORIZONTAL SCROLL */
.projects__pin {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
}

.projects__row {
  display: flex;
  gap: 50px;
  padding: 0 8vw;
}

/* PROJECT CARD */
.project-card {
  flex: 0 0 auto;
  width: 50vw;
  max-width: 650px;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  transform: translateZ(0);
}

.project-card__img {
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-position: center;
  transition: transform 1.2s ease;
}

.project-card:hover .project-card__img {
  transform: scale(1.07);
}

.project-card__info {
  margin-top: 1rem;
}

.project-card__title {
  font-size: 1.4rem;
  font-weight: 600;
}

.project-card__meta {
  margin-top: 0.3rem;
  opacity: 0.75;
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
  max-width: 600px;
  font-size: 1.05rem;
  opacity: 0.75;
  line-height: 1.55;
  margin-top: 1rem;
}

/* MOBILE */
@media (max-width: 900px) {
  .projects__pin {
    height: 70vh;
  }

  .project-card {
    width: 80vw;
  }

  .project-card__img {
    height: 45vh;
  }
}
</style>
