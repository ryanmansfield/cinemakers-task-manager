import { FETCH_TASKS, STAGE_SELECTED } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TASKS: {
      return state.concat(action.payload);
    }

    case STAGE_SELECTED: {
      return []; // Stage has changed. Clearing view.
    }
    default:
      return state;
  }
}
