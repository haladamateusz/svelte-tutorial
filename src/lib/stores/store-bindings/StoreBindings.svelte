<script>
    import { name, greeting } from './stores';
</script>

<h1>{$greeting}</h1>
<input value={$name} />

<button on:click={() => $name += "!"}>
    Add exclamation mark!
</button>