import type { Operator, Step } from '../types';

export const delay = <T>(ms: number): Step<T, T> =>
	(cf, cb) =>
		(data: T) => {
			setTimeout(() => cf(data), ms);
		}
;
