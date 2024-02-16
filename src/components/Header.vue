<template>
    <header v-motion :initial="{
        opacity: 0,
    }" :enter="{
    opacity: 1,
}" class="flex flex-col items-center justify-center pt-28">
        <div
            class="p-12 font-thin lg:text-9xl md:text-6xl sm:text-6xl text-6xl text-stone-800 dark:text-stone-100 tracking-tight">
            <span class="italic font-thin text-stone-400 dark:text-sky-200" v-motion :initial="{
                opacity: 0,
            }" :enter="{
    opacity: 1,
    transition: {
        duration: 800,
        delay: 1200,
    },
}">I'm a </span><span v-motion :initial="{
    opacity: 0,
}" :enter="{
    opacity: 1,
    transition: {
        duration: 800,
        delay: 1400,
    },
}">Software Engineer,</span><br>
            <span v-motion :initial="{
                opacity: 0,
            }" :enter="{
    opacity: 1,
    transition: {
        duration: 800,
        delay: 1600,
    },
}">Frontend Developer</span> <span v-motion :initial="{
    opacity: 0,
}" :enter="{
    opacity: 1,
    transition: {
        duration: 800,
        delay: 1800,
    },

}" class="italic font-thin text-stone-400 dark:text-sky-200">&</span> <span v-motion :initial="{
    opacity: 0,
}" :enter="{
    opacity: 1,
    transition: {
        duration: 800,
        delay: 2000,
    },
}">UI Designer</span>
        </div>
    </header>
</template>

<script scoped>
</script>

<style scoped>
header {
    min-height: 75vh;
}
</style>