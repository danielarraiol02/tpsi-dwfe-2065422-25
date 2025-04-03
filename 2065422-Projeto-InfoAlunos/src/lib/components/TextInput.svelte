<script>
    export let id = "";
    export let label = "";
    export let type = "text";
    export let placeholder = "";
    export let icon = "";
    export let value = "";
    export let required = false;
</script>

<div class="mb-6">
    <label for={id} class="block text-gray-700 text-sm font-medium mb-2"
        >{label}</label
    >
    <div class="relative">
        <span
            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500"
        >
            <i class="fas {icon}"></i>
        </span>
        <input
            {type}
            {id}
            {placeholder}
            {required}
            bind:value
            class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
    </div>
</div>
