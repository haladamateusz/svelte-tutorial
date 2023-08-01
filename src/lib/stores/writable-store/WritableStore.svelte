<script>
    import { count } from './stores';
    import Incrementer from "$lib/stores/writable-store/Incrementer.svelte";
    import Decrementer from "$lib/stores/writable-store/Decrementer.svelte";
    import Resetter from "$lib/stores/writable-store/Resetter.svelte";


</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
