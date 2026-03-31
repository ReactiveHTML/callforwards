import type { Operator, Step } from '../types';

export const log = <T>(prefix: string = ''): Step<T, T> =>
	(cf, cb) =>
		data => {
			console.log(prefix, data);
			cf(data);
		}
;

