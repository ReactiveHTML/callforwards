import type { Callforward, Observable, Operator, Step } from '../types';

/**
 * Only let data through when the last emission from `side` is truthy
**/
export const justWhen = (side: Observable<boolean>) =>
	(cf; Callforward) => {
		let ok = false;
		side.subscribe(x=>{
			ok = x;
		});

		return data => {
			if(ok) {
				cf(data);
			}
		};
	}
;
