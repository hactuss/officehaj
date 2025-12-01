// place files you want to import through the `$lib` alias in this folder.

import { updated } from '$app/state';
import { derived, fromStore, get, readable, readonly, toStore, writable } from 'svelte/store';

export const datevarts = writable(new Date());

//datevarts.update((datevarts) => setInterval(datevarts, 1000));

export let tick = writable(new Date(), () => {
	let interval = setInterval(() => {
		tick.update((datevarts) => datevarts);
	}, 1000);
	return () => {
		//clearInterval(interval);
		console.log('end of interval');
	};
});
