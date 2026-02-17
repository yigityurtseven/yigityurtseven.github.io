<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

function handleKeydown(e) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content" v-motion :initial="{ opacity: 0, y: 60, scale: 0.95 }"
      :enter="{ opacity: 1, y: 0, scale: 1, transition: { duration: 400, type: 'spring', stiffness: 200, damping: 25 } }">
      <!-- Close Button -->
      <button class="modal-close" @click="emit('close')" aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <!-- Project Image -->
      <div class="modal-image-wrapper">
        <img :src="project.image" :alt="project.title" class="modal-image" />
      </div>

      <!-- Project Details -->
      <div class="modal-details">
        <h2 class="modal-title">{{ project.title }}</h2>
        <p class="modal-description">{{ project.description }}</p>
        <p class="modal-tech">{{ project.tech }}</p>

        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="modal-link">
          Visit Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-content {
  background: #1a1a1a;
  border-radius: 1.5rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.modal-content::-webkit-scrollbar {
  width: 0;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e7e5e4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
}

.modal-image-wrapper {
  width: 100%;
  height: 320px;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
  background: #111;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-details {
  padding: 2rem;
}

.modal-title {
  font-family: 'Clash Display', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: #f5f5f4;
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
}

.modal-description {
  font-size: 1rem;
  color: #a8a29e;
  margin: 0 0 0.5rem;
  line-height: 1.6;
}

.modal-tech {
  font-size: 0.9rem;
  color: #78716c;
  margin: 0 0 1.75rem;
}

.modal-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  color: #e7e5e4;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.modal-link:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

/* === Mobile === */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 0;
    align-items: flex-end;
  }

  .modal-content {
    max-width: 100%;
    max-height: 92vh;
    border-radius: 1.5rem 1.5rem 0 0;
  }

  .modal-image-wrapper {
    height: 240px;
  }

  .modal-details {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.4rem;
  }
}
</style>
