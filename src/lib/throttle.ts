import type { Callforward, Operator, Step } from '../types';

export const throttle = <T>(): Step<T, T> =>
	(cf: Callforward) => {
		let af: number, latestData: any;
		return data => {
			latestData = data;
			if (!af) {
				af = requestAnimationFrame(() => {
					cf(latestData);
					af = 0;
				});
			}
		};
	}
;

