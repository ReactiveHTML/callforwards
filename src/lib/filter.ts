import type { Callforward, Operator, Step } from '../types';
export type Filter<I> = (data: I) => I | never;

export const filter = <I>(fn: Filter<I>): Step<I, I> =>
	(cf: Callforward) =>
		data =>
			fn(data) && cf(data)
;

