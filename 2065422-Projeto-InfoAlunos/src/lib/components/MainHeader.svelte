<script>
    export let isSidebarOpen;
    export let toggleSidebar; // Function to toggle sidebar
</script>

<header class="bg-gray-700 border-b border-gray-700 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between p-4">
            <button on:click={toggleSidebar} class="md:hidden text-white">
                <i class="bx bx-menu text-2xl"></i>
            </button>

            <div class="flex items-center justify-center flex-1">
                <div class="flex-none">
                    <img
                        src="logotipo-uma.png"
                        alt="University Logo"
                        class="h-10"
                    />
                </div>
                <div class="hidden md:block flex-1 text-center">
                    <h1 class="text-xl font-bold text-green-400">
                        Universidade da Madeira
                    </h1>
                    <p class="text-sm text-gray-400">Portal Académico</p>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <button
                    class="text-gray-400 hover:text-white transition-colors"
                >
                    <i class="bx bx-bell text-xl"></i>
                </button>
                <div class="flex items-center gap-2">
                    <img
                        src="https://placehold.co/32x32"
                        alt="User"
                        class="h-8 w-8 rounded-full border-2 border-gray-700"
                    />
                    <span
                        class="hidden md:block text-sm font-medium text-gray-300"
                        >Francisco Gouveia</span
                    >
                </div>
            </div>
        </div>
    </div>
</header>
