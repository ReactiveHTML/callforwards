import type { SinkFn, Step } from './types';

export const compose = (...fns: Step<unknown, unknown>[]) => {
	// TODO: define how callbacks would work?
	//   const cb = () => {
	//     console.log('circuit broken');
	//   }

	let nextFn: SinkFn<any> | null;
	const subscribe = <T>(sink: SinkFn<T>) => {
		nextFn = fns.reduceRight((a, b) => b(a, cb), sink);
		return {
			unsubscribe: () => nextFn = null,
		};
	};

	return {
		next: (data: any) => nextFn?.(data),
			subscribe,
	};
};
