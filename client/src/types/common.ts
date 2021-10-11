export interface FetchOptions {
  method: string;
  mode: string;
  cache: string;
  body?: string;
  headers?: Headers;
}
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type Maybe<T> = T | null;
