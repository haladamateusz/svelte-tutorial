<script>
    import { fade } from 'svelte/transition';

    let visible = true;
</script>

<div style="width:100%">
    {#if visible}
        <p transition:fade>
            Fades in and out
        </p>
    {/if}
    <label>
    <input type="checkbox" bind:checked={visible} />
    visible
</label>
</div>
