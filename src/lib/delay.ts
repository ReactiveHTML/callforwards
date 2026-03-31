import type { Callforward, Operator, Step } from '../types';

export const delay = <T>(ms: number): Step<T, T> =>
	(cf: Callforward) =>
		(data: T) => {
			setTimeout(() => cf(data), ms);
		}
;
