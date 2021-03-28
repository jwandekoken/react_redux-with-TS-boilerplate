import { combineReducers } from 'redux';

import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// we are making use of a built-in helper of TS (ReturnType), to take the type of what was returned from our reducers, and assigning this type to our RootState var, which, in short, will hold the type of our state (this is, what is returned from our reducers)
export type RootState = ReturnType<typeof reducers>;
