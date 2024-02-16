<template>
    <section class="flex flex-col gap-20 items-center">
        <div v-motion-visible-fade class="text-5xl font-light dark:text-stone-100"><span
                class="italic text-stone-500 dark:text-sky-200">About
            </span> Me</div>
        <div v-motion :initial="{
            opacity: 0,
        }" :visibleOnce="{
    opacity: 1,
    transition: {
        duration: 800,
        delay: 200,
    },
}" class="text-stone-800 dark:text-stone-100 text-3xl tracking-tight w-2/3 leading-[60px] text-center">
            Junior Software Engineer skilled in
            <span class="w-6 inline-block html">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 299.215 299.215"
                    xml:space="preserve" class="dark:fill-stone-100 w-6" fill="currentColor">
                    <g id="XMLID_106_">
                        <path id="XMLID_107_" d="M22.347,0c-2.75,0-4.799,2.241-4.555,4.98l23.184,260.047c0.244,2.739,2.611,5.582,5.262,6.318
		l98.381,27.316c2.65,0.736,6.986,0.736,9.637,0.002l98.68-27.361c2.65-0.735,5.02-3.578,5.264-6.316L281.422,4.98
		c0.246-2.739-1.805-4.98-4.555-4.98H22.347z M232.049,59.641c-0.219,2.443-0.598,6.684-0.842,9.423l-0.611,6.823
		c-0.246,2.738-0.596,6.654-0.781,8.701c-0.184,2.048-0.359,3.723-0.391,3.723c-0.031,0-2.307,0-5.057,0h-69.76
		c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0h-36.74c-2.75,0-4.799,2.241-4.555,4.98l2.143,23.955c0.244,2.738,2.695,4.98,5.445,4.98
		H144.5c2.75,0,5.025,0,5.055,0s2.303,0,5.053,0h57.939c2.75,0,7.006,0,9.457,0c2.449,0,4.273,1.999,4.051,4.442
		c-0.223,2.443-0.604,6.685-0.848,9.423l-6.891,77.228c-0.246,2.739-0.557,6.238-0.691,7.776c-0.137,1.537-2.416,3.396-5.066,4.131
		l-58.133,16.119c-2.65,0.734-4.852,1.342-4.893,1.351c-0.041,0.009-2.242-0.586-4.893-1.321l-58.195-16.148
		c-2.65-0.735-5.018-3.578-5.262-6.317l-3.746-42.045c-0.244-2.739,1.807-4.98,4.557-4.98h5.311c2.75,0,7.25,0,10,0h7.92
		c2.75,0,5.199,2.241,5.445,4.98l1.469,16.459c0.244,2.739,2.615,5.566,5.271,6.283l27.221,7.351
		c2.654,0.717,4.836,1.304,4.848,1.304s2.193-0.588,4.848-1.305l27.27-7.369c2.654-0.717,5.027-3.545,5.273-6.283l2.957-32.976
		c0.246-2.739-1.803-4.98-4.553-4.98h-30.666c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0H80.511c-2.75,0-5.199-2.242-5.443-4.98
		l-7.256-81.306c-0.244-2.739-0.623-6.979-0.842-9.423c-0.217-2.443,1.854-4.442,4.604-4.442H144.5c2.75,0,5.025,0,5.055,0
		s2.303,0,5.053,0h72.838C230.195,55.198,232.267,57.197,232.049,59.641z" />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg>
                <div class="opacity-0 html-inner border rounded-full absolute -top-5 px-2 text-sm transition duration-100">
                    HTML</div>
            </span>,
            <span class="w-6 inline-block css">
                <svg width="24px" height="24px" class="dar:fill-stone-100" fill="currentColor" viewBox="0 0 24 24"
                    role="img" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>
                <div class="opacity-0 css-inner border rounded-full absolute -top-5 px-2 text-sm transition duration-100">
                    CSS</div>
            </span>,
            <span class="w-6 inline-block js">
                <svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" class="dark:fill-stone-100">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -7479.000000)" fill="currentColor">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path
                                    d="M379.328,7337.432 C377.583,7337.432 376.455,7336.6 375.905,7335.512 L375.905,7335.512 L377.435,7334.626 C377.838,7335.284 378.361,7335.767 379.288,7335.767 C380.066,7335.767 380.563,7335.378 380.563,7334.841 C380.563,7334.033 379.485,7333.717 378.724,7333.391 C377.368,7332.814 376.468,7332.089 376.468,7330.558 C376.468,7329.149 377.542,7328.075 379.221,7328.075 C380.415,7328.075 381.275,7328.491 381.892,7329.578 L380.429,7330.518 C380.107,7329.941 379.758,7329.713 379.221,7329.713 C378.67,7329.713 378.321,7330.062 378.321,7330.518 C378.321,7331.082 378.67,7331.31 379.476,7331.659 C381.165,7332.383 382.443,7332.952 382.443,7334.814 C382.443,7336.506 381.114,7337.432 379.328,7337.432 L379.328,7337.432 Z M375,7334.599 C375,7336.546 373.801,7337.575 372.136,7337.575 C370.632,7337.575 369.731,7337 369.288,7336 L369.273,7336 L369.266,7336 L369.262,7336 L370.791,7334.931 C371.086,7335.454 371.352,7335.825 371.996,7335.825 C372.614,7335.825 373,7335.512 373,7334.573 L373,7328 L375,7328 L375,7334.599 Z M364,7339 L384,7339 L384,7319 L364,7319 L364,7339 Z"
                                    id="javascript-[#155]">

                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
                <div class="opacity-0 js-inner border rounded-full absolute -top-5 px-2 text-sm transition duration-100">
                    JavaScript</div>
            </span>,
            <span class="w-6 inline-block ts">
                <svg fill="currentColor" class="dark:fill-stone-100" width="24px" height="24px" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z" />
                </svg>
                <div class="opacity-0 ts-inner border rounded-full absolute -top-5 px-2 text-sm transition duration-100">
                    TypeScript</div>
            </span>,
            <span class="w-6 inline-block tw">
                <svg fill="currentColor" class="dark:fill-stone-100" width="24px" height="24px" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" />
                </svg>
                <div class="opacity-0 tw-inner border rounded-full absolute -top-5 px-2 text-sm transition duration-100">
                    TailwindCSS</div>
            </span>,
            <span class="w-6 inline-block vue">
                <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" class="dark:fill-stone-100"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.71693 1H0.5C0.320967 1 0.155598 1.09572 0.0664289 1.25097C-0.0227402 1.40622 -0.0220988 1.59729 0.0681106 1.75194L7.06811 13.7519C7.15772 13.9055 7.32217 14 7.5 14C7.67783 14 7.84228 13.9055 7.93189 13.7519L14.9319 1.75194C15.0221 1.59729 15.0227 1.40622 14.9336 1.25097C14.8444 1.09572 14.679 1 14.5 1H12.2831L7.50004 8.97184L2.71693 1Z"
                        fill="currentColor" />
                    <path d="M11.1169 1H8.191L7.50002 2.38197L6.80903 1H3.88312L7.50004 7.02819L11.1169 1Z"
                        fill="currentColor" />
                </svg>

                <div class="opacity-0 vue-inner border rounded-full absolute -top-5 px-2 text-sm transition duration-100">
                    Vue JS</div>
            </span> and
            <span class="w-6 inline-block figma">
                <svg xmlns="http://www.w3.org/2000/svg" class="dark:stroke-stone-100" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" />
                </svg>

                <div class="opacity-0 figma-inner border rounded-full absolute -top-5 px-2 text-sm transition duration-100">
                    Figma</div>
            </span>.
            Combining development expertise with design, I
            create <span class="italic font-thin text-stone-500 dark:text-sky-200">visually captivating </span> websites.
            Let's embark on a
            coding and design <span class="italic font-thin text-stone-500 dark:text-sky-200">adventure</span>
            together!
        </div>
    </section>
</template>

<style scoped>
section {
    min-height: 70vh;
}

.html:hover>.html-inner,
.css:hover>.css-inner,
.js:hover>.js-inner,
.ts:hover>.ts-inner,
.tw:hover>.tw-inner,
.vue:hover>.vue-inner,
.figma:hover>.figma-inner {
    opacity: 1;
}
</style>