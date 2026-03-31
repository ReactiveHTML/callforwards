import type { Operator, Step } from '../types';

export const debug = <T>(): Step<T, T> =>
	(cf, cb) =>
		data => {
			debugger;
			cf(data);
		}
;
