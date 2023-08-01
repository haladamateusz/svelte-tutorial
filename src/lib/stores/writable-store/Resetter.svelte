<script>

    import {count} from "$lib/stores/writable-store/stores";

    function reset() {
        count.set(0);
    }
</script>

<button on:click={reset}>
    reset
</button>
