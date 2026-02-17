<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import { useIntervalFn, useEventListener } from '@vueuse/core';

// Props: Define the images intended for the carousel
// Using explicit prop definitions for better type safety and clarity
const props = defineProps<{
    images: {
        src: string;
        alt: string;
    }[];
    // Optional: Auto-play interval in milliseconds (default 3s)
    interval?: number;
}>();

// --- State Management ---
// track current active index of photo gallery 
// we start at 0, which is the first image in the array
const activeIndex = ref(0);
// Template ref to access the scroll container DOM element
const carouselRef = ref<HTMLElement | null>(null);
// A flag to prevent scroll events from firing while we are progrmatically scrolling
let isManualScrolling = false;


// --- Core Logic: Scrolling ---
// Function to smooth scroll to a specific index
const scrollTo = (index: number) => {
    if (!carouselRef.value) return;

    // 1. Set flag so the scroll event listener doesn't try to update the index while moving
    isManualScrolling = true;
    // 2. Update our state
    activeIndex.value = index;

    // 3. Calculate position and scroll
    const scrollWidth = carouselRef.value.clientWidth;
    carouselRef.value.scrollTo({
        left: scrollWidth * index,
        behavior: 'smooth',
    });

    // 4. Reset flag after animation (approximate time for smooth scroll)
    setTimeout(() => {
        isManualScrolling = false;
    }, 500);
};

// --- Navigation: Clicking Dots ---
const onDotClick = (index: number) => {
    // Pause auto-play briefly when user interacts
    pause();
    scrollTo(index);
    // Resume after a short delay
    setTimeout(() => resume(), 2000);
};


// --- Auto-Play Functionality ---
// Use VueUse's interval function for clean timer management
const { pause, resume, isActive } = useIntervalFn(() => {
    // Calculate next index, looping back to 0 at the end
    const nextIndex = (activeIndex.value + 1) % props.images.length;
    scrollTo(nextIndex);
}, props.interval ?? 3000); // Default to 3000ms if prop not provided


// --- Synchronization: Handling manual swipes/scrolls ---
// We need to update the dots if the user swipes instead of clicking dots
onMounted(() => {
    if (!carouselRef.value) return;

    // Listen for scroll events on the container
    useEventListener(carouselRef.value, 'scroll', () => {
        // If we are currently moving via code (timer or dot click), ignore this event
        if (isManualScrolling || !carouselRef.value) return;

        // Calculate which slide is currently most visible based on scroll position
        const scrollLeft = carouselRef.value.scrollLeft;
        const clientWidth = carouselRef.value.clientWidth;
        // Math.round figures out which index is closest to the center
        const newIndex = Math.round(scrollLeft / clientWidth);

        // Update state if different
        if (newIndex !== activeIndex.value) {
            activeIndex.value = newIndex;
            // Reset timer so it doesn't immediately scroll away after a user swipe
            pause();
            resume();
        }
    }, { passive: true }); // passive: true improves scrolling performance
});

// Pause auto-scroll on hover/touch for better UX
const onMouseEnter = () => pause();
const onMouseLeave = () => resume();

</script>

<template>
    <div class="relative w-full max-w-md aspect-square mx-auto rounded-[2.5rem] overflow-hidden group isolate bg-zinc-900 shadow-xl"
        @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchstartPassive="onMouseEnter"
        @touchendPassive="onMouseLeave">
        <div ref="carouselRef"
            class="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth">
            <div v-for="(image, index) in images" :key="index" class="w-full h-full flex-shrink-0 snap-center relative">
                <img :src="image.src" :alt="image.alt"
                    class="w-full h-full object-cover pointer-events-none select-none" draggable="false" />
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none">
                </div>
            </div>
        </div>


        <div
            class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-black/30 backdrop-blur-md rounded-full z-10 transition-opacity duration-300">

            <button v-for="(_, index) in images" :key="index" @click="onDotClick(index)" type="button"
                aria-label="Go to slide" class="w-2.5 h-2.5 rounded-full transition-all duration-300 ease-out" :class="[
                    // Active state: wider and pure white
                    index === activeIndex ? 'w-6 bg-white' : 'bg-white/50 hover:bg-white/80'
                ]"></button>
        </div>
    </div>
</template>

<style scoped>
/* Utility to hide scrollbars in Chrome/Safari/Edge 
  You should add this to your global CSS or Tailwind config, 
  but it's here for portability.
*/
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>