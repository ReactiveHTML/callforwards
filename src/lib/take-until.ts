import type { Callforward, Operator, Step } from '../types';

export const takeUntil = (other) =>
	(cf: Callforward) => {
		let term = false;
		other(() => term = true);
		return data => {
			term || cf(data)
		}
	}
;
