<template>
    <header class="bg-[#003149] text-white py-4">
        <img class="mx-auto" src="@/assets/SRPSLogo200.png" alt="SRPS Logo" />

        <div class="navbar">
            <div class="navbar-start lg:hidden">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><RouterLink activeClass="active" to="/">Home</RouterLink></li>
                        <li><RouterLink activeClass="active" to="/about">About the Society</RouterLink></li>
                        <li><RouterLink activeClass="active" to="/getinvolved">Get involved</RouterLink></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><RouterLink activeClass="active" to="/">Home</RouterLink></li>
                    <li><RouterLink activeClass="active" to="/about">About the Society</RouterLink></li>
                    <li><RouterLink activeClass="active" to="/getinvolved">Get involved</RouterLink></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style>
.active{
    @apply underline;
}
</style>