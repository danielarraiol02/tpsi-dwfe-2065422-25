<script>
    import AuthLayout from "$lib/components/AuthLayout.svelte";
    import TextInput from "$lib/components/TextInput.svelte";
    import PasswordInput from "$lib/components/PasswordInput.svelte";
    import AuthFooter from "$lib/components/AuthFooter.svelte";

    let fullName = "";
    let email = "";
    let studentNumber = "";
    let password = "";
    let confirmPassword = "";
    let terms = false;

    function handleSubmit(e) {
        e.preventDefault();
        // Registration logic here
    }
</script>

<svelte:head>
    <title>UMa Portal Académico - Register</title>
</svelte:head>

<AuthLayout subtitle="Criar nova conta">
    <form class="space-y-6" on:submit={handleSubmit}>
        <TextInput
            id="fullName"
            label="Nome Completo"
            icon="fa-user"
            placeholder="Introduza o seu nome completo"
            required={true}
            bind:value={fullName}
        />

        <TextInput
            id="email"
            label="Endereço de Email"
            type="email"
            icon="fa-envelope"
            placeholder="Introduza o seu endereço de email"
            required={true}
            bind:value={email}
        />

        <TextInput
            id="number"
            label="Número de Estudante/Funcionário"
            icon="fa-id-card"
            placeholder="Introduza o seu número"
            required={true}
            bind:value={studentNumber}
        />

        <PasswordInput id="password" bind:value={password} required={true} />

        <PasswordInput
            id="confirmPassword"
            label="Confirmar Password"
            placeholder="Confirme a sua palavra-passe"
            bind:value={confirmPassword}
            required={true}
        />

        <!-- Terms and Conditions -->
        <div class="flex items-center mb-6">
            <input
                type="checkbox"
                id="terms"
                bind:checked={terms}
                class="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                required
            />
            <label for="terms" class="ml-2 block text-sm text-gray-700">
                Aceito os <a
                    href="https://www.uma.pt/privacidade-e-termos-de-utilizacao/"
                    class="text-green-600 hover:text-green-500"
                    >Termos e Condições</a
                >
            </label>
        </div>

        <!-- Submit Button -->
        <button
            type="submit"
            class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
            Registar
        </button>
    </form>

    <AuthFooter isLogin={false} />
</AuthLayout>
