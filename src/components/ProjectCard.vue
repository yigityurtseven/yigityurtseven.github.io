<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    title: string;
    description: string;
    image: string;
    color?: string;
    link?: string;
}>();
</script>

<template>
    <div class="group relative w-full h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg transition-transform hover:scale-[1.02] duration-500 ease-out"
        :style="{ backgroundColor: color || '#C19A6B' }">
        <div
            class="absolute top-0 left-0 w-full h-full group-hover:h-[65%] rounded-[2.5rem] transition-all duration-500 ease-in-out z-10">
            <img :src="image" alt="Project Cover" class="w-full rounded-[2.5rem] h-full object-cover" />

            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
        <a v-if="link" :href="link"
            class="absolute top-6 right-6 z-20 flex items-center gap-2 bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 hover:bg-white/40">
            Open Case Study
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="rotate-0 group-hover:rotate-45 transition-transform duration-300">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </a>
        <div class="absolute bottom-0 left-0 w-full h-[35%] flex flex-col justify-center px-8 pb-4 text-white z-0">
            <div
                class="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-out">
                <h3 class="text-3xl font-semibold mb-2">{{ title }}</h3>
                <p class="text-white/90 text-lg leading-relaxed">
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>