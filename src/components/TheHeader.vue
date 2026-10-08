<script setup lang="ts">
    import { ref } from 'vue';

    const isMenuOpen = ref(false);

    const navigationLinks = [
        { label: 'Home', to: '/' },
        { label: 'About the Society', to: '/about' },
        { label: 'Get involved', to: '/getinvolved' },
        { label: 'Recruitment', to: '/recruitment' },
        { label: 'Reports & Documents', to: '/reports-and-documents' },
    ];
</script>

<template>
    <header class="bg-gradient-to-b from-[#003149] to-[#2b6177] py-4 text-white">
        <img class="mx-auto" src="@/assets/SRPSLogo200.png" alt="SRPS Logo" />

        <div class="navbar mx-auto max-w-6xl justify-center px-4 pt-4">
            <div class="navbar-start lg:hidden">
                <div class="relative">
                    <button
                        type="button"
                        class="btn btn-circle btn-ghost"
                        aria-label="Toggle navigation menu"
                        aria-controls="mobile-navigation"
                        :aria-expanded="isMenuOpen"
                        @click="isMenuOpen = !isMenuOpen"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        v-if="isMenuOpen"
                        id="mobile-navigation"
                        class="menu menu-sm absolute left-0 top-full z-50 mt-3 w-64 rounded-box bg-white p-2 text-[#003149] shadow-xl"
                        aria-label="Main navigation"
                    >
                        <li v-for="link in navigationLinks" :key="link.to">
                            <RouterLink
                                :to="link.to"
                                exact-active-class="bg-[#fff4bf] font-semibold text-[#003149]"
                                class="rounded-lg text-[#003149] hover:bg-gray-100"
                                @click="isMenuOpen = false"
                            >
                                {{ link.label }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <nav class="navbar-center hidden lg:flex" aria-label="Main navigation">
                <ul class="flex items-center gap-2">
                    <li v-for="link in navigationLinks" :key="link.to">
                        <RouterLink
                            :to="link.to"
                            exact-active-class="bg-[#fddf51] font-semibold text-[#003149] shadow-sm"
                            class="block rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fddf51]"
                        >
                            {{ link.label }}
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
