<script>
    export let id = "password";
    export let label = "Password";
    export let placeholder = "Introduza a sua palavra-passe";
    export let value = "";
    export let required = false;

    let showPassword = false;

    function togglePassword() {
        showPassword = !showPassword;
    }
</script>

<div class="mb-6">
    <label for={id} class="block text-gray-700 text-sm font-medium mb-2"
        >{label}</label
    >
    <div class="relative">
        <span
            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500"
        >
            <i class="fas fa-lock"></i>
        </span>
        <input
            type={showPassword ? "text" : "password"}
            {id}
            {placeholder}
            {required}
            bind:value
            class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button
            type="button"
            on:click={togglePassword}
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
        >
            <i class={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
        </button>
    </div>
</div>
