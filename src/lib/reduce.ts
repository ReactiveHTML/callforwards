import type { Callforward, Operator, Step } from '../types';
export type Mapper<I, O=I> = (data: I) => O;

export const reduce = <I, O=I>(fn: Mapper<I, O>, initial: O): Step<I, O> => {
	let acc = initial;
	let i = 0;

	return (cf: Callforward) => {
		const first = data => {
			acc = data
			i++
		};

		const next = data => {
			cf(acc = fn(acc, data, i++))
		};

		return initial ? first : next;
	}
};

