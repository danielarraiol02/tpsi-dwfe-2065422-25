<script>
    export let title = "UMa Portal Académico";
    export let subtitle = "";
</script>

<div class="flex items-center justify-center min-h-screen">
    <div
        style="opacity: 0.175; background-size: cover; background-position: center; z-index: -1; position: absolute; height: 100vh; width: 100%; background-image: url('Banner-Site-UMa.png')"
        class=""
    ></div>
    <div class="w-full max-w-md">
        <div
            class="bg-[#38ce3c] bg-opacity-10 border border-[#38ce3c] rounded-lg shadow-xl p-8"
        >
            <div class="text-center mb-8">
                <img
                    src="logotipo-uma.png"
                    alt="UMa Logo"
                    class="h-20 mx-auto mb-4"
                />
                <h2 class="text-3xl font-bold text-gray-800">{title}</h2>
                {#if subtitle}
                    <p class="text-gray-600">{subtitle}</p>
                {/if}
            </div>

            <slot />
        </div>
    </div>
</div>
