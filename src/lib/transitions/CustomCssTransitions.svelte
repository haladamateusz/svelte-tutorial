<script>
    import { fade } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';

    let visible = false;

    function spin(node, { duration }) {
        return {
            duration,
            css: (t) => {
                const eased = elasticOut(t);

                return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`
            }
        };
    }
</script>

<label>
    <input type="checkbox" bind:checked={visible} />
    visible123
</label>

{#if visible}
    <div
            class="centered"
            in:spin={{ duration: 8000 }}
            out:fade
    >
        <span>transitions!</span>
    </div>
{/if}

<style>
    .centered {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    span {
        color: #0074d9;
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 4em;
    }
</style>
