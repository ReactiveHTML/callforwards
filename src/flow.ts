import type { SinkFn, Step } from './types';

export const flow = (...fns: Step<unknown, unknown>[]) => {
	// TODO: define how callbacks would work?
	const cb = () => {
		console.log('circuit broken');
	}

	let nextFn: SinkFn<any> | null;

	const next = (data: any) => nextFn?.(data);

	const subscribe = <T>(sink: SinkFn<T>) => {
		nextFn = fns.reduceRight((cf, b) => b(cf, cb), sink);
		return {
			unsubscribe: () => nextFn = null,
		};
	};

	/**
	 * Export an Observable interface for interoperability
	 */
	return {
		next,
		subscribe,
	};
};
