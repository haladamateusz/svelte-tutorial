<script>
    import { onMount } from 'svelte';
    import { typewriter } from './transitions';
    import { messages } from './loading-messages';

    let i = 1;

    onMount(() => {
        const interval = setInterval(() => {
            i += 1;
            i %= messages.length;
        }, 2500);

        return () => {
            clearInterval(interval);
        };
    });
</script>
{#key i}
    <p in:typewriter={{ speed: 10 }}>
        {messages[i] || ''}
    </p>
{/key}

<h1>loading...</h1>

