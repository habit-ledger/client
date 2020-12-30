import { IAPIException } from '@shared/props';

export type ApiResult<T> = T | IAPIException;
