/**
 * This file is not commented because these are simply bindings between a Prop and a Constant.
 * The variable names are written such that you can simply look and know what you are dealing with.
 *
 * All successes must return the data the API provides, or have a MessageResponse
 *
 * All errors must pass on the API's error response so that other error detection can listen and
 * respond accurately.
 */

import * as constants from './account.constants';

import { props, createAction } from '@ngrx/store';
import { IRegisterAccount, IAuthSuccess, ILogin, IConfirmAccount } from './account.props';
import { IAPIException } from '@shared/props';

export const register = createAction(constants.Register, props<IRegisterAccount>());
export const registerSuccess = createAction(constants.RegisterSuccess, props<IAuthSuccess>());
export const registerFailure = createAction(constants.RegisterFailure, props<IAPIException>());

export const login = createAction(constants.Login, props<ILogin>());
export const loginSuccess = createAction(constants.LoginSuccess, props<IAuthSuccess>());
export const loginFailure = createAction(constants.LoginFailure, props<IAPIException>());

export const confirm = createAction(constants.Confirm, props<IConfirmAccount>());
export const confirmSuccess = createAction(constants.ConfirmSuccess, props<IAuthSuccess>());
export const confirmFailure = createAction(constants.ConfirmFailure, props<IAPIException>());
