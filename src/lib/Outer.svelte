<script>
	import Inner from './Inner.svelte';
</script>

<p>Nested event emitter without bubbling:</p>
<Inner on:outputEvenEmitter />
