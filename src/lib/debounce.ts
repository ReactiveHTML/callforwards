import type { Operator, Step } from '../types';

export const debounce = <T>(ms: number): Step<T, T> =>
	(cf, cb) => {
		let timeout: NodeJS.Timeout;
		return data => {
			clearTimeout(timeout);
			timeout = setTimeout(() => cf(data), ms);
		};
	}
;
