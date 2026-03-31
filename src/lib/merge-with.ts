import type { Operator, Step } from '../types';

export const mergeWith = (...sources) =>
	(cf, cb) => {
		const inputs = sources.map(source => {
			source.subscribe(data => {
				// debugger;
				cf(data);
			});
			// source(cf, cb));
		});

		return data => cf(data);
	}
;
