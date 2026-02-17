<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="about-page">
    <!-- Header -->
    <header class="about-header" v-motion :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
      <button class="back-home" @click="goHome">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Yigit Yurtseven
      </button>
    </header>

    <!-- Content -->
    <main class="about-content">
      <section class="about-bio" v-motion :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }">
        <h1 class="about-title">About</h1>
        <div class="bio-text">
          <p>
            Software Engineer skilled in
            <span class="tech-tag">HTML</span>,
            <span class="tech-tag">CSS</span>,
            <span class="tech-tag">JavaScript</span>,
            <span class="tech-tag">TypeScript</span>,
            <span class="tech-tag">Tailwind CSS</span>,
            <span class="tech-tag">Vue</span>, and
            <span class="tech-tag">Figma</span> —
            product-minded designer based in Milan, originally from Türkiye.
          </p>
          <p>
            Currently pursuing my PhD at Politecnico di Milano, where I explore how technology, interaction,
            and human behavior shape each other.
          </p>
          <p class="bio-secondary">
            I'm focused on crafting digital experiences that feel effortless, blending clear design,
            thoughtful engineering, and a deep curiosity for how people use products.
          </p>
        </div>
      </section>

      <!-- Social Links -->
      <section class="about-socials" v-motion :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }">
        <h2 class="socials-title">Get in touch</h2>
        <div class="socials-grid">
          <a href="mailto:y.yurtseven@outlook.com" class="social-card">
            <div class="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div class="social-info">
              <span class="social-label">Email</span>
              <span class="social-value">y.yurtseven@outlook.com</span>
            </div>
            <svg class="social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/yigithan-yurtseven/" target="_blank" rel="noopener noreferrer"
            class="social-card">
            <div class="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div class="social-info">
              <span class="social-label">LinkedIn</span>
              <span class="social-value">yigithan-yurtseven</span>
            </div>
            <svg class="social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background-color: #0F0F0F;
  padding: 0 2rem 4rem;
}

/* === Header === */
.about-header {
  padding: 2rem 0;
  max-width: 700px;
  margin: 0 auto;
}

.back-home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #a8a29e;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  font-family: 'Clash Display', sans-serif;
  letter-spacing: -0.01em;
}

.back-home:hover {
  color: #f5f5f4;
}

/* === Content === */
.about-content {
  max-width: 700px;
  margin: 0 auto;
}

/* === Bio === */
.about-bio {
  margin-bottom: 3.5rem;
}

.about-title {
  font-family: 'Clash Display', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  color: #f5f5f4;
  margin: 0 0 1.5rem;
  letter-spacing: -0.03em;
}

.bio-text p {
  font-size: 1.1rem;
  line-height: 1.75;
  color: #d6d3d1;
  margin: 0 0 1.25rem;
}

.bio-text p:last-child {
  margin-bottom: 0;
}

.bio-secondary {
  color: #78716c !important;
}

.tech-tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  color: #e7e5e4;
  padding: 0.15rem 0.55rem;
  border-radius: 0.4rem;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* === Socials === */
.about-socials {
  margin-bottom: 3rem;
}

.socials-title {
  font-family: 'Clash Display', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #a8a29e;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
}

.socials-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.social-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

.social-icon {
  width: 44px;
  height: 44px;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e7e5e4;
  flex-shrink: 0;
}

.social-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
}

.social-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #f5f5f4;
}

.social-value {
  font-size: 0.85rem;
  color: #78716c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.social-arrow {
  color: #57534e;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.social-card:hover .social-arrow {
  color: #a8a29e;
  transform: translate(2px, -2px);
}

/* === Mobile === */
@media (max-width: 768px) {
  .about-page {
    padding: 0 1.25rem 3rem;
  }

  .about-header {
    padding: 1.5rem 0;
  }

  .bio-text p {
    font-size: 1rem;
  }

  .social-card {
    padding: 1rem 1.25rem;
  }
}
</style>
