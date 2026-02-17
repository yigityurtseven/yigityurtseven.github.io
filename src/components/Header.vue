<template>
    <header v-motion :initial="{
        opacity: 0,
    }" :enter="{
        opacity: 1,
    }" :style="{ background: `linear-gradient(to bottom, ${currentGradientColor}, #0F0F0F)` }"
        class="flex flex-col items-center justify-center h-[90vh]">
        <div class="p-12 font-bold lg:text-9xl md:text-6xl sm:text-6xl text-6xl text-stone-100 tracking-tight">
            <span v-motion :initial="{
                opacity: 0,
            }" :enter="{
                opacity: 1,
                transition: {
                    duration: 800,
                    delay: 1800,
                },
            }">Yigit Yurtseven</span>
        </div>
        <div v-motion :initial="{
            opacity: 0,
        }" :enter="{
            opacity: 1,
            transition: {
                duration: 800,
                delay: 2200,
            },
        }" class="text-stone-300 absolute right-4 bottom-0">
            <span>{{ currentDate }}</span>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentDate = ref('');
const baseGradientColor = ref('#12275A');
const currentGradientColor = ref('#12275A');

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(scrollPosition / windowHeight * 2, 1);

    // Parse base color and target color (#0F0F0F)
    const baseColor = baseGradientColor.value;
    const targetColor = '#0F0F0F';

    // Convert hex to RGB
    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    const base = hexToRgb(baseColor);
    const target = hexToRgb(targetColor);

    // Interpolate between colors
    const r = Math.round(base.r + (target.r - base.r) * scrollProgress);
    const g = Math.round(base.g + (target.g - base.g) * scrollProgress);
    const b = Math.round(base.b + (target.b - base.b) * scrollProgress);

    currentGradientColor.value = `rgb(${r}, ${g}, ${b})`;
};

onMounted(() => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const date = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
    currentDate.value = `${date}, ${day}`;

    // Set gradient based on time of day
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
        // Morning: bright, sunny colors
        baseGradientColor.value = '#1c1c1c';
    } else if (hour >= 12 && hour < 18) {
        // Afternoon: orangy colors
        baseGradientColor.value = '#1c1c1c';
    } else {
        // Evening/Night: current dark blue
        baseGradientColor.value = '#1c1c1c';
    }

    currentGradientColor.value = '#1c1c1c';

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
header {
    min-height: 75vh;
}
</style>