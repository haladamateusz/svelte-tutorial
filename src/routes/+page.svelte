<script lang="ts">
	import Nested from '$lib/Nested.svelte';
	import PackageInfo from '$lib/PackageInfo.svelte';
	import EachBlocks from '$lib/EachBlocks.svelte';
	import Thing from '$lib/Thing.svelte';
	import RandomDoggo from '$lib/RandomDoggo.svelte';
	import Inner from '$lib/Inner.svelte';
	import Outer from "$lib/Outer.svelte";
	import Input from "$lib/inputs-binding/Input.svelte";
	import NumericInput from "$lib/inputs-binding/NumericInput.svelte";
	import CheckboxInput from "$lib/inputs-binding/CheckboxInput.svelte";
	import SelectInput from "$lib/inputs-binding/SelectInput.svelte";
	import GroupInputs from "$lib/inputs-binding/GroupInputs.svelte";
	import SelectMultipleInput from "$lib/inputs-binding/SelectMultipleInput.svelte";
	import BeforeUpdateAfterUpdate from "$lib/lifecycle/BeforeUpdateAfterUpdate.svelte";
	import Tick from "$lib/lifecycle/Tick.svelte";

	let name = 'Svelte';
	let src = 'shiba-inu.jpg';

	let count = 0;
	$: reactiveSheet = count * 2;

	// like ngOnChanges in Angular
	$: if (count > 10) {
		alert('count is dangerously high!');
		count = 0;
	}

	function handleClick(name: string) {
		console.log(name);
		count += 1;
	}

	let numbers = [1, 2, 3, 4];
	// reactive streams always need an initial value
	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

	let obj = {
		foo: {
			bar: 'skrrt'
		}
	};
	function addNumber() {
		// Because Svelte's reactivity is triggered by assignments,

		// using array methods like push and splice won't automatically cause updates.
		// numbers[numbers.length] = numbers.length + 1;
		// or
		numbers = [...numbers, numbers.length + 1];
		// or
		// numbers.push(numbers.length + 1);
		// numbers = numbers;

		// according to documentation, this is the only way to trigger reactivity
		// surprisingly, this changes the value of obj.foo.bar
		const foo = obj.foo;
		foo.bar = 'baz';
		console.log(foo.bar, obj.foo.bar);
	}

	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function thingsClick() {
		things = things.slice(1);
	}

	function handleEventEmitter(event: { detail: { text: string } }) {
		alert(event.detail.text);
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1>Hello {name.toUpperCase()}</h1>

<img {src} alt="Chonky" />

<Nested answer="another tricky answer" />
<Nested />

<PackageInfo {...pkg} />

<p>{reactiveSheet}</p>
<button on:click={() => handleClick('test')}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}> Add a number </button>

{#if count > 5}
	<p>{count} is greater than 5</p>
{:else if count === 5}
	<p>{count} is 5</p>
{:else}
	<p>{count} is between 0 and 4</p>
{/if}

<p>Speed:</p>
{#if pkg.speed === 'blazing'}
	<p>🔥🔥🔥</p>
{:else if pkg.speed === 'fast'}
	<p>🚀🚀🚀</p>
{:else if pkg.speed === 'slow'}
	<p>🐢🐢🐢</p>
{:else}
	<p>🐌🐌🐌</p>
{/if}

<EachBlocks />

<button on:click={thingsClick}> Remove first thing </button>

<!--always pass a unique key to each block as trackBy-->
{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}

<RandomDoggo  />

<Inner on:outputEvenEmitter={handleEventEmitter} />

<Outer on:outputEvenEmitter={handleEventEmitter} />

<Input />

<NumericInput />

<CheckboxInput />

<SelectInput />

<GroupInputs />

<SelectMultipleInput />

<BeforeUpdateAfterUpdate />
<!--<OnMount />-->


<Tick />
<style>
	img {
		border-radius: 50%;
	}
	h1 {
		color: red;
	}
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
