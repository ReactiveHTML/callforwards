import type { Callforward, Operator, Step } from '../types';

export const log = <T>(prefix: string = '🪵'): Step<T, T> =>
	(cf: Callforward) =>
		(data: T) => {
			console.log(prefix, data);
			cf(data);
		}
;

