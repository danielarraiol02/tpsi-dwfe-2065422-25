<script>
    import AuthLayout from "$lib/components/AuthLayout.svelte";
    import TextInput from "$lib/components/TextInput.svelte";
    import PasswordInput from "$lib/components/PasswordInput.svelte";
    import AuthFooter from "$lib/components/AuthFooter.svelte";

    let email = "";
    let password = "";
    let rememberMe = false;

    function handleSubmit(e) {
        e.preventDefault();

        // Simple domain-based redirect
        if (email.endsWith("@admin.uma.pt")) {
            window.location.href = "/admin";
        } else if (email.endsWith("@staff.uma.pt")) {
            window.location.href = "/teacher";
        } else if (email.endsWith("@student.uma.pt")) {
            window.location.href = "/student";
        } else {
            alert(
                "Email inválido. Use um email @admin.uma.pt, @staff.uma.pt ou @student.uma.pt",
            );
        }
    }
</script>

<svelte:head>
    <title>UMa Portal Académico - Login</title>
</svelte:head>

<AuthLayout subtitle="Iniciar sessão">
    <form class="space-y-6" on:submit={handleSubmit}>
        <TextInput
            id="email"
            label="Endereço de Email"
            type="email"
            icon="fa-user"
            placeholder="exemplo@student.uma.pt"
            required={true}
            bind:value={email}
        />

        <PasswordInput bind:value={password} required={true} />

        <!-- Remember Me -->
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
                <input
                    type="checkbox"
                    id="remember"
                    bind:checked={rememberMe}
                    class="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                />
                <label for="remember" class="ml-2 block text-sm text-gray-700"
                    >Lembrar-se</label
                >
            </div>
            <a href="#" class="text-sm text-green-600 hover:text-green-500"
                >Recuperar Palavra-Passe</a
            >
        </div>

        <!-- Submit Button -->
        <button
            type="submit"
            class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
            Entrar
        </button>
    </form>

    <AuthFooter isLogin={true} />
</AuthLayout>
