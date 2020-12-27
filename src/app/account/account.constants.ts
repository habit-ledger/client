import { constantKeyResultSetFn, EventSet } from '@shared/constants';

// Used to identify the state management section
export const FeatureKey = 'Account';

const constantSet = constantKeyResultSetFn(FeatureKey);

export const [ Login, LoginSuccess, LoginFailure ]: EventSet
  = constantSet('Login');

export const [ Register, RegisterSuccess, RegisterFailure ]: EventSet
  = constantSet('Register');

export const [ Confirm, ConfirmSuccess, ConfirmFailure ]: EventSet
  = constantSet('Confirm Account');
