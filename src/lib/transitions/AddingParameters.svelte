<script>
    import { fade, fly } from 'svelte/transition';

    let visible = true;
</script>

<label>
    <input type="checkbox" bind:checked={visible} />
    visible
</label>

{#if visible}
    <!--transition: if you want to use same animation for in and out-->
    <p transition:fly={{ y: 200, duration: 2000, delay: 100 }}>
        Flies in and fades out
    </p>

<!--    in & out for different animations-->
    <p in:fly={{ y: 200, duration: 2000, delay: 100 }} out:fade>
        Flies in and fades out
    </p>
{/if}
