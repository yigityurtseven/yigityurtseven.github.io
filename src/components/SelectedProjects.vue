<template>
    <section class="flex flex-col gap-20 items-center justify-center">
        <div v-motion-visible-fade class="text-5xl font-light"><span
                class="italic text-stone-500 dark:text-sky-200">Projects</span></div>
        <div v-motion-visible-fade
            class="w-4/5 izonay max-w-[1500px] h-[400px] rounded-xl bg-red-400 relative hover:shadow-xl transition duration-100">
            <div class="arrow absolute top-2 right-2">
                <a href="https://www.izonay.com" target="_blank">
                    <button class="bg-white p-2 rounded-full"><svg fill="#000000" width="24px" height="24px"
                            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 44.0195 36.2149 L 44.0195 14.2070 C 44.0195 12.8711 43.1758 11.9805 41.7929 11.9805 L 19.7851 12.0273 C 18.4961 12.0273 17.6289 12.9883 17.6289 14.0898 C 17.6289 15.1914 18.6133 16.1289 19.6914 16.1289 L 26.6758 16.1289 L 37.8320 15.7070 L 33.5664 19.4570 L 12.6367 40.4336 C 12.2149 40.8555 11.9805 41.3711 11.9805 41.8633 C 11.9805 42.9648 12.9649 44.0195 14.1133 44.0195 C 14.6524 44.0195 15.1445 43.8086 15.5664 43.3867 L 36.5429 22.4102 L 40.2929 18.1680 L 39.8711 28.8320 L 39.8711 36.3086 C 39.8711 37.3867 40.8086 38.3711 41.9336 38.3711 C 43.0351 38.3711 44.0195 37.4570 44.0195 36.2149 Z" />
                        </svg>
                    </button>
                </a>
            </div>
            <div class="absolute flex flex-col gap-3 rounded-xl bottom-2 left-2 max-w-[300px] p-8 bg-[#f6f6f6]">
                <div class="w-2 h-2 rounded-full bg-black absolute right-2 top-2"></div>
                <span class="font-bold text-lg">Izonay Commercial</span>
                <p class="text-gray-700">İzOnay is an electronic signature platform that streamlines document signing.</p>
                <p class="text-gray-700">Designed in Figma and written with React.</p>
            </div>
        </div>
        <div v-motion-visible-fade
            class="w-4/5 izometri max-w-[1500px] h-[400px] rounded-xl bg-red-400 relative hover:shadow-xl transition duration-100">
            <div class="arrow absolute top-2 right-2">
                <a href="https://www.izometri.com.tr" target="_blank">
                    <button class="bg-white p-2 rounded-full"><svg fill="#000000" width="24px" height="24px"
                            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 44.0195 36.2149 L 44.0195 14.2070 C 44.0195 12.8711 43.1758 11.9805 41.7929 11.9805 L 19.7851 12.0273 C 18.4961 12.0273 17.6289 12.9883 17.6289 14.0898 C 17.6289 15.1914 18.6133 16.1289 19.6914 16.1289 L 26.6758 16.1289 L 37.8320 15.7070 L 33.5664 19.4570 L 12.6367 40.4336 C 12.2149 40.8555 11.9805 41.3711 11.9805 41.8633 C 11.9805 42.9648 12.9649 44.0195 14.1133 44.0195 C 14.6524 44.0195 15.1445 43.8086 15.5664 43.3867 L 36.5429 22.4102 L 40.2929 18.1680 L 39.8711 28.8320 L 39.8711 36.3086 C 39.8711 37.3867 40.8086 38.3711 41.9336 38.3711 C 43.0351 38.3711 44.0195 37.4570 44.0195 36.2149 Z" />
                        </svg>
                    </button>
                </a>
            </div>
            <div class="absolute flex flex-col gap-3 rounded-xl bottom-2 left-2 max-w-[300px] p-8 bg-[#f6f6f6]">
                <div class="w-2 h-2 rounded-full bg-black absolute right-2 top-2"></div>
                <span class="font-bold text-lg">Izometri Company Website</span>
                <p class="text-gray-700">İzometri Bilişim is a software development company based in Istanbul, Turkey.</p>
                <p class="text-gray-700">Designed in Figma and written with Vue.</p>
            </div>
        </div>
        <div v-motion-visible-fade
            class="w-4/5 love max-w-[1500px] h-[400px] rounded-xl bg-red-400 relative hover:shadow-xl transition duration-100">
            <div class="arrow absolute top-2 right-2">
                <a href="https://yigityurtseven.github.io/love-test/" target="_blank">
                    <button class="bg-white p-2 rounded-full"><svg fill="#000000" width="24px" height="24px"
                            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 44.0195 36.2149 L 44.0195 14.2070 C 44.0195 12.8711 43.1758 11.9805 41.7929 11.9805 L 19.7851 12.0273 C 18.4961 12.0273 17.6289 12.9883 17.6289 14.0898 C 17.6289 15.1914 18.6133 16.1289 19.6914 16.1289 L 26.6758 16.1289 L 37.8320 15.7070 L 33.5664 19.4570 L 12.6367 40.4336 C 12.2149 40.8555 11.9805 41.3711 11.9805 41.8633 C 11.9805 42.9648 12.9649 44.0195 14.1133 44.0195 C 14.6524 44.0195 15.1445 43.8086 15.5664 43.3867 L 36.5429 22.4102 L 40.2929 18.1680 L 39.8711 28.8320 L 39.8711 36.3086 C 39.8711 37.3867 40.8086 38.3711 41.9336 38.3711 C 43.0351 38.3711 44.0195 37.4570 44.0195 36.2149 Z" />
                        </svg>
                    </button>
                </a>
            </div>
            <div class="absolute flex flex-col gap-3 rounded-xl bottom-2 left-2 max-w-[300px] p-8 bg-[#f6f6f6]">
                <div class="w-2 h-2 rounded-full bg-black absolute right-2 top-2"></div>
                <span class="font-bold text-lg">Love Test</span>
                <p class="text-gray-700">A simple love test that calcuates love percentage of given two names.</p>
                <p class="text-gray-700">Written with Vue.</p>
            </div>
        </div>
        <div v-motion-visible-fade
            class="w-4/5 spotify max-w-[1500px] h-[400px] rounded-xl bg-red-400 relative hover:shadow-xl transition duration-100">
            <div class="arrow absolute top-2 right-2">
                <a href="https://yigityurtseven.github.io/spotify-api-ui/" target="_blank">
                    <button class="bg-white p-2 rounded-full"><svg fill="#000000" width="24px" height="24px"
                            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 44.0195 36.2149 L 44.0195 14.2070 C 44.0195 12.8711 43.1758 11.9805 41.7929 11.9805 L 19.7851 12.0273 C 18.4961 12.0273 17.6289 12.9883 17.6289 14.0898 C 17.6289 15.1914 18.6133 16.1289 19.6914 16.1289 L 26.6758 16.1289 L 37.8320 15.7070 L 33.5664 19.4570 L 12.6367 40.4336 C 12.2149 40.8555 11.9805 41.3711 11.9805 41.8633 C 11.9805 42.9648 12.9649 44.0195 14.1133 44.0195 C 14.6524 44.0195 15.1445 43.8086 15.5664 43.3867 L 36.5429 22.4102 L 40.2929 18.1680 L 39.8711 28.8320 L 39.8711 36.3086 C 39.8711 37.3867 40.8086 38.3711 41.9336 38.3711 C 43.0351 38.3711 44.0195 37.4570 44.0195 36.2149 Z" />
                        </svg>
                    </button>
                </a>
            </div>
            <div class="absolute flex flex-col gap-3 rounded-xl bottom-2 left-2 max-w-[300px] p-8 bg-[#f6f6f6]">
                <div class="w-2 h-2 rounded-full bg-black absolute right-2 top-2"></div>
                <span class="font-bold text-lg">Spotify API UI</span>
                <p class="text-gray-700">An application that displays artist, playlist, album and Spotify user information
                    with Spotify API.</p>
                <p class="text-gray-700">Written with Vue and TypeScript.</p>
            </div>
        </div>
        <div v-motion-visible-fade
            class="w-4/5 rick-and-morty max-w-[1500px] h-[400px] rounded-xl bg-red-400 relative hover:shadow-xl transition duration-100">
            <div class="arrow absolute top-2 right-2">
                <a href="https://yigityurtseven.github.io/rick-and-morty/" target="_blank">
                    <button class="bg-white p-2 rounded-full"><svg fill="#000000" width="24px" height="24px"
                            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 44.0195 36.2149 L 44.0195 14.2070 C 44.0195 12.8711 43.1758 11.9805 41.7929 11.9805 L 19.7851 12.0273 C 18.4961 12.0273 17.6289 12.9883 17.6289 14.0898 C 17.6289 15.1914 18.6133 16.1289 19.6914 16.1289 L 26.6758 16.1289 L 37.8320 15.7070 L 33.5664 19.4570 L 12.6367 40.4336 C 12.2149 40.8555 11.9805 41.3711 11.9805 41.8633 C 11.9805 42.9648 12.9649 44.0195 14.1133 44.0195 C 14.6524 44.0195 15.1445 43.8086 15.5664 43.3867 L 36.5429 22.4102 L 40.2929 18.1680 L 39.8711 28.8320 L 39.8711 36.3086 C 39.8711 37.3867 40.8086 38.3711 41.9336 38.3711 C 43.0351 38.3711 44.0195 37.4570 44.0195 36.2149 Z" />
                        </svg>
                    </button>
                </a>
            </div>
            <div class="absolute flex flex-col gap-3 rounded-xl bottom-2 left-2 max-w-[300px] p-8 bg-[#f6f6f6]">
                <div class="w-2 h-2 rounded-full bg-black absolute right-2 top-2"></div>
                <span class="font-bold text-lg">Rick and Morty API UI</span>
                <p class="text-gray-700">An application that shows Rick and Morty characters and related info about them.
                </p>
                <p class="text-gray-700">Written with Vue.</p>
            </div>
        </div>
        <!-- <div class="w-4/5 yurtseven max-w-[1500px] h-[400px] rounded-xl bg-red-400 relative">
            <div class="arrow absolute top-2 right-2">
                <a href="#">
                    <button class="bg-white p-2 rounded-full"><svg fill="#000000" width="24px" height="24px"
                            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 44.0195 36.2149 L 44.0195 14.2070 C 44.0195 12.8711 43.1758 11.9805 41.7929 11.9805 L 19.7851 12.0273 C 18.4961 12.0273 17.6289 12.9883 17.6289 14.0898 C 17.6289 15.1914 18.6133 16.1289 19.6914 16.1289 L 26.6758 16.1289 L 37.8320 15.7070 L 33.5664 19.4570 L 12.6367 40.4336 C 12.2149 40.8555 11.9805 41.3711 11.9805 41.8633 C 11.9805 42.9648 12.9649 44.0195 14.1133 44.0195 C 14.6524 44.0195 15.1445 43.8086 15.5664 43.3867 L 36.5429 22.4102 L 40.2929 18.1680 L 39.8711 28.8320 L 39.8711 36.3086 C 39.8711 37.3867 40.8086 38.3711 41.9336 38.3711 C 43.0351 38.3711 44.0195 37.4570 44.0195 36.2149 Z" />
                        </svg>
                    </button>
                </a>
            </div>
            <div class="absolute flex flex-col gap-3 rounded-xl bottom-2 left-2 max-w-[300px] p-8 bg-[#f6f6f6]">
                <div class="w-2 h-2 rounded-full bg-black absolute right-2 top-2"></div>
                <span class="font-bold text-lg">Yurtseven Kuyumculuk</span>
                <p class="text-gray-700">A local jewelry shop.
                </p>
            </div>
        </div> -->
    </section>
</template>


<style scoped>
section {
    min-height: 100vh;
}

.izonay {
    background-image: url('../assets/sign.jpg');
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.2s ease-in-out;
}

.izonay:hover,
.izometri:hover,
.love:hover,
.spotify:hover,
.rick-and-morty:hover {
    box-shadow: 0px 0px 20px rgba(57, 57, 57, 0.517);
}

.izometri {
    background-image: url('../assets/izometri.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 0.2s ease-in-out;
}

.love {
    background-image: url('../assets/love.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 0.2s ease-in-out;
}

.spotify {
    background-image: url('../assets/spotify.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 0.2s ease-in-out;
}

.rick-and-morty {
    background-image: url('../assets/rickandmorty.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 0.2s ease-in-out;
}

.yurtseven {
    background-image: url('../assets/yurtseven.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 0.2s ease-in-out;
}

.arrow {
    transition: 0.2s ease-in-out;
}


.izonay:hover>.arrow,
.izometri:hover>.arrow,
.love:hover>.arrow,
.yurtseven:hover>.arrow {
    transform: scale(1.15);
}
</style>