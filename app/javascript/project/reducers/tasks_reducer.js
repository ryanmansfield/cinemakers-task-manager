import { FETCH_TASKS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_TASKS: {
      return action.payload;
    }
    default:
      return state;
  }
}
