<script>
    import SideNavbar from "$lib/components/SideNavbar.svelte";
    import Footer from "$lib/components/MainFooter.svelte";
    import Header from "$lib/components/MainHeader.svelte";
    import { page } from "$app/stores";

    // You can pass user type from a parent component or store
    export let userType = "student";
</script>

<div class="flex h-screen">
    <SideNavbar {userType} />

    <main class="flex-1 overflow-y-auto p-6 bg-gray-100">
        <Header></Header>

        <!-- This slot will render the content of child pages -->
        <slot />
        <Footer></Footer>
    </main>
</div>
