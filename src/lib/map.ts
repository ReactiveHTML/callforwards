import type { Callforward, Operator, Step } from '../types';
export type Mapper<I, O=I> = (data: I) => O;

export const map = <I, O=I>(fn: Mapper<I, O>): Step<I, O> =>
	(cf: Callforward) =>
		data =>
			cf(fn(data))
;

