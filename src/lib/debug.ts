import type { Callforward, Operator, Step } from '../types';

export const debug = <T>(): Step<T, T> =>
	(cf: Callforward) =>
		data => {
			debugger;
			cf(data);
		}
;
