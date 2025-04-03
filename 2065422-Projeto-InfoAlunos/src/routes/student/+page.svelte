<!-- src/routes/student/dashboard/+page.svelte -->
<div class="space-y-6">
    <h2 class="text-2xl font-bold text-gray-800">Dashboard</h2>

    <!-- Quick Stats -->
    <div class="grid md:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="flex items-center gap-4 mb-2">
                <i class="bx bx-book-open text-2xl text-green-600"></i>
                <h3 class="font-semibold text-gray-800">Próxima Aula</h3>
            </div>
            <p class="text-gray-600">Design de Hipermédia</p>
            <p class="text-sm text-gray-500">Daqui a 1h</p>
        </div>
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="flex items-center gap-4 mb-2">
                <i class="bx bx-check-circle text-2xl text-green-600"></i>
                <h3 class="font-semibold text-gray-800">Presenças</h3>
            </div>
            <p class="text-2xl font-bold text-gray-800">85%</p>
            <p class="text-sm text-gray-500">Este semestre</p>
        </div>
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="flex items-center gap-4 mb-2">
                <i class="bx bx-wallet text-2xl text-green-600"></i>
                <h3 class="font-semibold text-gray-800">Pagamentos</h3>
            </div>
            <p class="text-2xl font-bold text-gray-800">69.70€</p>
            <p class="text-sm text-red-500">Expira em 5 dias</p>
        </div>
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="flex items-center gap-4 mb-2">
                <i class="bx bx-calendar text-2xl text-green-600"></i>
                <h3 class="font-semibold text-gray-800">Eventos</h3>
            </div>
            <p class="text-gray-600">Exposição "Neve e Arte"</p>
            <p class="text-sm text-gray-500">20 de Dezembro, 2024</p>
        </div>
    </div>

    <!-- Today's Schedule -->
    <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div class="flex items-center justify-between mb-6">
            <h3 class="font-semibold text-gray-800 flex items-center gap-2">
                <i class="bx bx-time-five text-green-600"></i>
                Horário Diário
            </h3>
            <span class="text-sm text-gray-500"
                >Segunda-Feira, 6 de janeiro 2025</span
            >
        </div>
        <div class="space-y-4">
            <div
                class="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
            >
                <div class="flex items-center gap-4">
                    <span class="text-green-600 font-medium">15:30</span>
                    <div>
                        <h4 class="font-medium text-gray-800">
                            Introdução à Programação
                        </h4>
                        <p class="text-sm text-gray-600">Piso 2, Sala 31</p>
                    </div>
                </div>
                <span
                    class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >A decorrer...</span
                >
            </div>
            <div
                class="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
            >
                <div class="flex items-center gap-4">
                    <span class="text-green-600 font-medium">18:00</span>
                    <div>
                        <h4 class="font-medium text-gray-800">
                            Design de Hipermédia
                        </h4>
                        <p class="text-sm text-gray-600">Piso 2, Sala 31</p>
                    </div>
                </div>
                <span
                    class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >Próxima</span
                >
            </div>
        </div>
    </div>

    <!-- Upcoming Deadlines & Notifications -->
    <div class="grid md:grid-cols-2 gap-6">
        <!-- Deadlines -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3
                class="font-semibold text-gray-800 mb-6 flex items-center gap-2"
            >
                <i class="bx bx-calendar-exclamation text-green-600"></i>
                Prazos para entrega
            </h3>
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <div class="bg-red-100 text-red-800 rounded-lg p-2">
                        <span class="block text-center font-bold">JAN</span>
                        <span class="block text-center text-xl font-bold"
                            >07</span
                        >
                    </div>
                    <div>
                        <h4 class="font-medium text-gray-800">
                            Projeto de Design de Hipermédia
                        </h4>
                        <p class="text-sm text-gray-600">Prazo de 1 dia</p>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <div class="bg-yellow-100 text-yellow-800 rounded-lg p-2">
                        <span class="block text-center font-bold">JAN</span>
                        <span class="block text-center text-xl font-bold"
                            >09</span
                        >
                    </div>
                    <div>
                        <h4 class="font-medium text-gray-800">
                            Projeto de Introdução à Programação
                        </h4>
                        <p class="text-sm text-gray-600">Prazo de 3 dias</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recent Notifications -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3
                class="font-semibold text-gray-800 mb-6 flex items-center gap-2"
            >
                <i class="bx bx-bell text-green-600"></i>
                Notificações recentes
            </h3>
            <div class="space-y-4">
                <div class="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <i class="bx bx-info-circle text-blue-600 text-xl"></i>
                    <div>
                        <h4 class="font-medium text-gray-800">
                            Aula cancelada
                        </h4>
                        <p class="text-sm text-gray-600">
                            SOR cancelada amanhã
                        </p>
                        <p class="text-xs text-gray-500 mt-1">Há 10 minutos</p>
                    </div>
                </div>
                <div class="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                    <i class="bx bx-check-circle text-green-600 text-xl"></i>
                    <div>
                        <h4 class="font-medium text-gray-800">
                            Atribuição de nota
                        </h4>
                        <p class="text-sm text-gray-600">
                            Matemática - 2º Frequência avaliada
                        </p>
                        <p class="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
