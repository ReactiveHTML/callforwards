// ???
import type { Callforward, Operator, Step } from '../types';

export const buffer = <I>(): Step<I, I> =>
	(cf: Callforward, pd: PullData) => {
		// configure lossy/lossless behaviour?
		const buf = [];

		return {
			cf: data => buf.push(data);
			pd: async function*() {
				yield *buf;
			}
		};
	}
;

