import { FETCH_CHECKLISTS, STAGE_SELECTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CHECKLISTS: {
      return action.payload;
    }

    // case STAGE_SELECTED: {
    //   return []; // Stage has changed. Clearing view.
    // }
    default:
      return state;
  }
}



