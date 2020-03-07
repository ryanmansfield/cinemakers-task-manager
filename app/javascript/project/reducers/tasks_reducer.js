import { FETCH_TASKS, STAGE_SELECTED } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TASKS: {
      // return action.payload;
      return state.concat(action.payload);
    }
    // case FETCH_TASKS: {
    //   if (state.map(task => task.id).includes(action.payload.id)) {
    //     return state;
    //   } else {
    //     const copiedState = state.slice(0);
    //     copiedState.push(action.payload);
    //     return copiedState;
    //   }
    // }
    case STAGE_SELECTED: {
      return []; // Stage has changed. Clearing view.
    }
    default:
      return state;
  }
}
