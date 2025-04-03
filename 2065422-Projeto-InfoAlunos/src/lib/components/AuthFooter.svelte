<script>
    export let isLogin = true;
</script>

<div class="mt-6 text-center text-sm text-gray-600">
    {#if isLogin}
        <p>
            Ainda não tem conta? <a
                href="/register"
                class="text-green-600 hover:text-green-500">Registe-se agora!</a
            >
        </p>
    {:else}
        <p>
            Já tem conta? <a
                href="/login"
                class="text-green-600 hover:text-green-500">Iniciar sessão</a
            >
        </p>
    {/if}
    <p class="mt-2">
        Precisa de ajuda? Contacte <a
            href="https://helpdesk.uma.pt/"
            class="text-green-600 hover:text-green-500">suporte</a
        >
    </p>
</div>
