<script>

    import {count} from "$lib/stores/writable-store/stores";

    function decrement() {
        count.update((n) => n - 1);
    }
</script>

<button on:click={decrement} disabled="{!$count}">
    -
</button>
