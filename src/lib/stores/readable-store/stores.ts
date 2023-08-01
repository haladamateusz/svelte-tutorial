import { readable } from 'svelte/store';
import type { Readable } from 'svelte/store';

export const time: Readable<Date> = readable(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
