<script>
    import SideNavbar from "$lib/components/SideNavbar.svelte"; // Adjust the import path as needed
    import { page } from "$app/stores";

    // You can pass user type from a parent component or store
    export let userType = "teacher";
</script>

<div class="flex h-screen">
    <SideNavbar {userType} />

    <main class="flex-1 overflow-y-auto p-6 bg-gray-100">
        <!-- This slot will render the content of child pages -->
        <slot />
    </main>
</div>
