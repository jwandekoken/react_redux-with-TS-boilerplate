import { useDispatch } from 'react-redux';
// https://redux.js.org/api/bindactioncreators
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  // this will return an obj with all our actionCreators already wrapped into a dispatch, so we can call it without the need to pass it to dispatch
  // something like:
  // { searchRepositories: dispatch(actionCreators.searchRepositories) }
  return bindActionCreators(actionCreators, dispatch);
};
