<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectModal from './ProjectModal.vue'

import signImg from '../assets/sign.jpg'
import izometriImg from '../assets/izometri.jpg'
// import spotifyImg from '../assets/spotify.jpeg'
import rickandmortyImg from '../assets/rickandmorty.jpeg'
import swipeosImg from '../assets/swipeos.png'

const route = useRoute()
const router = useRouter()

const projects = ref([
  {
    slug: 'swipeos',
    title: 'SwipeOS',
    description: 'An iOS app to clean your photo library. Swipe left to delete, right to keep.',
    tech: 'Built with Swift and SwiftUI.',
    image: swipeosImg,
    link: 'https://yigityurtseven.github.io/swipeos/',
  },
  // {
  //   slug: 'spotify-api',
  //   title: 'Spotify API UI',
  //   description: 'An application that displays artist, playlist, album and Spotify user information with Spotify API.',
  //   tech: 'Written with Vue and TypeScript.',
  //   image: spotifyImg,
  //   link: 'https://yigityurtseven.github.io/spotify-api-ui/',
  // },
  {
    slug: 'rick-and-morty',
    title: 'Rick and Morty API UI',
    description: 'An application that shows Rick and Morty characters and related info about them.',
    tech: 'Written with Vue.',
    image: rickandmortyImg,
    link: 'https://yigityurtseven.github.io/rick-and-morty/',
  },
  {
    slug: 'izonay',
    title: 'Izonay Commercial',
    description: 'İzOnay is an electronic signature platform that streamlines document signing.',
    tech: 'Designed in Figma and written with React.',
    image: signImg,
    link: 'https://www.izonay.com',
  },
  {
    slug: 'izometri',
    title: 'Izometri Company Website',
    description: 'İzometri Bilişim is a software development company based in Istanbul, Turkey.',
    tech: 'Designed in Figma and written with Vue.',
    image: izometriImg,
    link: 'https://www.izometri.com.tr',
  },
])

const selectedProject = computed(() => {
  if (route.params.slug) {
    return projects.value.find((p) => p.slug === route.params.slug) || null
  }
  return null
})

const showModal = computed(() => !!selectedProject.value)

function openProject(project) {
  router.push({ name: 'project', params: { slug: project.slug } })
}

function closeModal() {
  router.push({ name: 'home' })
}

// Scroll container ref
const scrollContainer = ref(null)

function scrollProjects(direction) {
  if (scrollContainer.value) {
    const scrollAmount = 340
    scrollContainer.value.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 800 } }">
      <div class="hero-content">
        <h1 class="hero-name" v-motion :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }">
          Yigit Yurtseven
        </h1>
        <p class="hero-position" v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }">
          Software Engineer & UI/UX Designer
        </p>
        <div class="hero-buttons" v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 900 } }">
          <a href="mailto:y.yurtseven@outlook.com" class="btn btn-email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </a>
          <router-link to="/about" class="btn btn-about">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            About
          </router-link>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section" v-motion :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1200 } }">
      <div class="projects-scroll-wrapper">
        <button class="scroll-arrow scroll-arrow-left" @click="scrollProjects(-1)" aria-label="Scroll left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <div class="projects-scroll" ref="scrollContainer">
          <div v-for="project in projects" :key="project.slug" class="project-card" @click="openProject(project)">
            <div class="project-image-wrapper">
              <img :src="project.image" :alt="project.title" class="project-image" />
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}
                <span v-if="project.link" class="external-icon">↗</span>
              </h3>
              <p class="project-description">{{ project.description }}</p>
            </div>
          </div>
        </div>
        <button class="scroll-arrow scroll-arrow-right" @click="scrollProjects(1)" aria-label="Scroll right">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>

    <!-- Project Modal -->
    <Transition name="modal">
      <ProjectModal v-if="showModal" :project="selectedProject" @close="closeModal" />
    </Transition>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0F0F0F;
  overflow-x: hidden;
}

/* === Hero === */
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem 2rem;
  min-height: 55vh;
}

.hero-content {
  text-align: center;
  max-width: 800px;
}

.hero-name {
  font-family: 'Clash Display', sans-serif;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  font-weight: 600;
  color: #f5f5f4;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 0.75rem;
}

.hero-position {
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  color: #a8a29e;
  font-weight: 400;
  margin: 0 0 2.5rem;
  letter-spacing: -0.01em;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.6rem;
  border-radius: 9999px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  letter-spacing: -0.01em;
}

.btn-email {
  background: rgba(255, 255, 255, 0.08);
  color: #e7e5e4;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-email:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.btn-about {
  background: rgba(255, 255, 255, 0.08);
  color: #e7e5e4;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-about:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

/* === Projects Section === */
.projects-section {
  padding: 0 0 3rem;
  position: relative;
}

.projects-scroll-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.scroll-arrow {
  position: absolute;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e7e5e4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
}

.projects-scroll-wrapper:hover .scroll-arrow {
  opacity: 1;
}

.scroll-arrow:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.scroll-arrow-left {
  left: 1rem;
}

.scroll-arrow-right {
  right: 1rem;
}

.projects-scroll {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 1.5rem 2.5rem;
  scrollbar-width: none;
}

.projects-scroll::-webkit-scrollbar {
  display: none;
}

.project-card {
  flex: 0 0 auto;
  width: 300px;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  scroll-snap-align: start;
}

.project-card:hover {
  transform: translateY(-6px);
}

.project-image-wrapper {
  width: 100%;
  height: 220px;
  border-radius: 1.25rem;
  overflow: hidden;
  margin-bottom: 0.85rem;
  background: #1c1c1e;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-info {
  padding: 0 0.25rem;
}

.project-title {
  font-size: 1rem;
  font-weight: 600;
  color: #f5f5f4;
  margin: 0 0 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.external-icon {
  font-size: 0.85rem;
  color: #78716c;
  transition: color 0.3s;
}

.project-card:hover .external-icon {
  color: #e7e5e4;
}

.project-description {
  font-size: 0.85rem;
  color: #78716c;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* === Modal Transition === */
.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* === Mobile === */
@media (max-width: 768px) {
  .hero {
    min-height: 50vh;
    padding: 3rem 1.5rem 1.5rem;
  }

  .hero-buttons {
    gap: 0.75rem;
  }

  .btn {
    padding: 0.6rem 1.3rem;
    font-size: 0.9rem;
  }

  .projects-scroll {
    padding: 1rem 1.25rem;
    gap: 1rem;
  }

  .project-card {
    width: 260px;
  }

  .project-image-wrapper {
    height: 180px;
  }

  .scroll-arrow {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 45vh;
    padding: 2.5rem 1rem 1rem;
  }

  .project-card {
    width: 230px;
  }

  .project-image-wrapper {
    height: 160px;
  }
}
</style>
