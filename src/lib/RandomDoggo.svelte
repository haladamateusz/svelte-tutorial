<script lang="ts">
    import { onMount } from 'svelte';

    interface Doggo {
        message: string;
        status: string;
    }

    const apiUrl = 'https://dog.ceo/api/breed/shiba/images/random';

    let doggoImage: string;

    // similar to ngOnInit in Angular
    onMount(async () => {
        const res = await fetch(apiUrl);

        if(res.ok) {
            const data = await res.json() as Doggo;
            doggoImage = data.message;
        }
        else {
            // Sometimes the API will fail!
            throw new Error('Request failed');
        }
    });

</script>

{#if doggoImage}
    <p>Here's a doggo!</p>
    <img src="{doggoImage}" alt="random doggo">
{/if}

<!--{#await doggoPromise}-->
<!--    <p>Waiting for doggo...</p>-->
<!--{:then dogImage}-->
<!--    <p>Here's a doggo!</p>-->
<!--    <img src="{dogImage}" alt="random doggo">-->
<!--{:catch error}-->
<!--    <p style="color: red">{error.message}</p>-->
<!--{/await}-->
