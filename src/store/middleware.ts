/**
 * Import des types
 */
import { storeOptions } from './types';
import { RootState } from './reducer';

export default (store: storeOptions) => (next: Function) => (action: object) => {
  const state: RootState = store.getState();
  console.log(state);
  next(action);
};
