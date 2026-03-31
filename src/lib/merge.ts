import type { Operator, Step } from '../types';

export const merge = (...sources) =>
	(cf, cb) => {
		let fwd;
		let cf2 = data => {
			fwd?.(data);
		};
		debugger;
		sources.forEach(source => source.subscribe(cf2, cb));
		return data => {
			cf(data)
		}
	}; 

