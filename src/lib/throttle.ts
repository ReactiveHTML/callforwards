import type { Operator, Step } from '../types';

export const throttle = <T>(): Step<T, T> =>
	(cf, cb) => {
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

