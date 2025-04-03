<script>
    import { page } from "$app/stores";

    export let userType = "student";

    const menuItems = {
        student: [
            { id: "", name: "Inicio", icon: "bxs-dashboard" },
            { id: "enrollment", name: "Matrícula", icon: "bxs-graduation" },
            { id: "attendance", name: "Faltas", icon: "bx-calendar-check" },
            { id: "timetable", name: "Horário", icon: "bx-time-five" },
            { id: "grades", name: "Pauta", icon: "bxs-bar-chart-alt-2" },
            { id: "inquiries", name: "Inquéritos", icon: "bx-help-circle" },
            { id: "requests", name: "Requerimentos", icon: "bx-file" },
            { id: "documents", name: "Documentação", icon: "bxs-file-doc" },
            { id: "payments", name: "Pagamentos", icon: "bx-credit-card" },
            { id: "events", name: "Eventos", icon: "bx-calendar-event" },
        ],
        teacher: [
            { id: "dashboard", name: "Inicio", icon: "bxs-dashboard" },
            { id: "classes", name: "Turmas", icon: "bx-group" },
            { id: "schedule", name: "Horário", icon: "bx-time-five" },
            { id: "grades", name: "Lançar Notas", icon: "bxs-bar-chart-alt-2" },
            {
                id: "attendance",
                name: "Registo de Presenças",
                icon: "bx-calendar-check",
            },
            { id: "resources", name: "Recursos", icon: "bx-book-open" },
            { id: "requests", name: "Requerimentos", icon: "bx-file" },
            { id: "events", name: "Eventos", icon: "bx-calendar-event" },
        ],
    };

    let isSidebarOpen = false;

    function toggleSidebar() {
        isSidebarOpen = !isSidebarOpen;
    }

    $: icons = {
        student: "bxs-graduation",
        teacher: "bxs-user-badge",
    };

    $: currentPage = $page.route.id?.split("/").pop() || "dashboard";
</script>

<aside class="md:static z-30 w-72 bg-gray-700 text-white">
    <div class="p-6">
        <div class="flex items-center gap-3 mb-8">
            <i class={`bx ${icons[userType]} text-3xl text-green-400`}></i>
            <h1 class="text-2xl font-bold capitalize">{userType}</h1>
        </div>
        <nav>
            <ul class="space-y-2">
                {#each menuItems[userType] as item}
                    <li>
                        <a
                            href="/student/{item.id}"
                            class="flex items-center p-3 rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
                            class:bg-green-600={currentPage === item.id}
                        >
                            <i class={`bx ${item.icon} text-xl mr-3`}></i>
                            {item.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</aside>
