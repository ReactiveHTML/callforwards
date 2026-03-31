export type Callforward<T> = (data: T) => void;
export type Callback<T> = (data: T) => void;
export type Processor<I> = (data: I) => void;
export type Step<I, O> = (cf: Callforward<O>, cb?: Callback<any>) => Processor<I>;
export type Operator<I, O> = (...params: any) => Step<I, O>;
export type SinkFn<T> = (data: T) => void;
export type Sink<E extends Element, T> = (target: E) => SinkFn<T>;

