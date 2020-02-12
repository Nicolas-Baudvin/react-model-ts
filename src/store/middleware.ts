import { storeOptions } from './types';

export default (store: storeOptions) => (next: Function) => (action: object) => {
  console.log('middleware', action);
  const state: object = store.getState();
  console.log(state);
  next(action);
};
