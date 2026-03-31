import type { Callforward, Operator, Step } from '../types';

export const debounce = <Operator<T>>(ms: number) =>
	(cf: Callforward) => {
		let timeout: ReturnType<typeof setTimeout>;
		return (data: T) => {
			timeout && clearTimeout(timeout);
			timeout = setTimeout(cf.bind(null, data), ms);
		};
	}
;
