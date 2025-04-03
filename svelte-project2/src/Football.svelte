<script>
    let leagues = [];
    let loading = true;
    let error = null; // To store error message if any
    import { push } from "svelte-spa-router";

    // Replace with your API key from Football-Data.org
    const API_KEY = "2e73521261184664a75e8461edffad99"; // Replace with your actual API key

    // Fetch data when the component is mounted
    async function getData() {
        try {
            const response = await fetch(
                "https://api.football-data.org/v4/competitions",
                {
                    method: "GET",
                    headers: {
                        "X-Auth-Token": API_KEY, // Authentication header for Football-Data.org
                    },
                },
            );

            console.log("Response Status:", response.status); // Log response status

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data); // Log the actual data to inspect

            if (data && data.competitions && Array.isArray(data.competitions)) {
                leagues = data.competitions; // Extract the leagues data
            } else {
                error = "No leagues data found in the response";
            }
        } catch (err) {
            console.error("Error fetching data:", err); // Log the actual error
            error = err.message;
        } finally {
            loading = false;
        }
    }

    // Run the fetch on component mount
    getData();
</script>

<main>
    <h1>API Futebol</h1>

    {#if loading}
        <p>A carregar...</p>
    {:else if error}
        <p>Erro: {error}</p>
    {:else}
        <ul>
            {#each leagues as league}
                <li>{league.name} - {league.area.name}</li>
            {/each}
        </ul>
    {/if}
    <button on:click={() => push("/")}>Voltar à página anterior</button>
</main>
