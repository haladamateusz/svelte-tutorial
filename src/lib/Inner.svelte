<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('outputEvenEmitter', {
			text: 'Hello!'
		});
	}
</script>

<p><button on:click={sayHello}>Output Event Emitter</button></p>
