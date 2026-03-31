export type Subscription = {
	unsubscribe: () => void;
};

export type Observable<T> = {
	subscribe: (observer: Observer<T> | ObserverFunction<T>, error?: ObserverErrorFunction, complete?: ObserverCompleteFunction) => Subscription;
};
export type Callforward<T> = (data: T) => void;
export type Callback<T> = (data: T) => void;
export type Processor<I> = (data: I) => void;
export type Step<I, O=I> = (cf: Callforward<O>, cb?: Callback<any>) => Processor<I>;
export type Operator<I, O=I> = (...params: any) => Step<I, O>;
export type SinkFn<T> = (data: T) => void;
export type Sink<E extends Element, T> = (target: E) => SinkFn<T>;

