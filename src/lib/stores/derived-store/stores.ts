import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

// It's possible to derive a store from multiple input stores, and to explicitly
// set a value instead of returning it (which is useful for
// deriving values asynchronously). Consult the API reference for more information.
const start = new Date();

export const elapsed = derived(time, ($time: Date) =>
	Math.round((Number($time) - Number(start)) / 1000)
);
