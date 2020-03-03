  import { STAGE_SELECTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case STAGE_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
