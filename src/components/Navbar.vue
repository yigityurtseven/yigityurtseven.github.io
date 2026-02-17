<template>
    <nav class="w-screen fixed bottom-0 flex flex-row items-center justify-center pb-6 z-30">
        <Transition @before-enter="beforeEnter" @enter="enter" :css="false">
            <div v-if="showNavbar"
                class="flex flex-row items-center justify-around gap-2 shadow-lg bg-white/10 backdrop-filter backdrop-blur-xl text-neutral-200  rounded-full drop-shadow-2xl">
                <a href="#about"
                    class="nav-link transition duration-200 ease-in-out rounded-full py-2 px-6 hover:bg-white/40 ">about</a>
                <a href="#projects"
                    class="nav-link transition duration-200 ease-in-out rounded-full py-2 px-6 hover:bg-white/40 ">projects</a>
                <a href="#contact"
                    class="nav-link transition duration-200 ease-in-out rounded-full py-2 px-6 hover:bg-white/40 ">contact</a>
            </div>
        </Transition>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showNavbar = ref(false)

onMounted(() => {
    setTimeout(() => {
        showNavbar.value = true
    }, 500)
})

const beforeEnter = (el) => {
    el.style.width = '48px'
    el.style.minWidth = '48px'
    el.style.height = '48px'
    el.style.padding = '0'
    el.style.opacity = '0'
    el.style.transform = 'translateY(100px)'

    const links = el.querySelectorAll('.nav-link')
    links.forEach(link => {
        link.style.opacity = '0'
        link.style.transform = 'scale(0)'
    })
}

const enter = (el, done) => {
    // Animate dot appearing from bottom
    el.animate(
        [
            { opacity: 0, transform: 'translateY(100px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 500, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', fill: 'forwards' }
    ).finished.then(() => {
        // Get the natural width before morphing
        const tempEl = el.cloneNode(true)
        tempEl.style.width = 'auto'
        tempEl.style.minWidth = 'fit-content'
        tempEl.style.height = 'auto'
        tempEl.style.padding = '0.75rem'
        tempEl.style.visibility = 'hidden'
        tempEl.style.position = 'absolute'
        el.parentElement.appendChild(tempEl)
        const finalWidth = tempEl.offsetWidth + 'px'
        const finalHeight = tempEl.offsetHeight + 'px'
        el.parentElement.removeChild(tempEl)

        // Morph into navbar with calculated dimensions
        return el.animate(
            [
                { width: '48px', height: '48px', padding: '0' },
                { width: finalWidth, height: finalHeight, padding: '0.75rem' }
            ],
            { duration: 800, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', fill: 'forwards' }
        ).finished
    }).then(() => {
        // Reset width to auto for responsiveness
        el.style.width = 'auto'
        el.style.minWidth = 'fit-content'
        el.style.height = 'auto'

        // Fade in links
        const links = el.querySelectorAll('.nav-link')
        return Promise.all(
            Array.from(links).map((link, index) =>
                link.animate(
                    [
                        { opacity: 0, transform: 'scale(0.5)' },
                        { opacity: 1, transform: 'scale(1)' }
                    ],
                    {
                        duration: 400,
                        delay: index * 60,
                        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                        fill: 'forwards'
                    }
                ).finished
            )
        )
    }).then(() => {
        done()
    })
}
</script>