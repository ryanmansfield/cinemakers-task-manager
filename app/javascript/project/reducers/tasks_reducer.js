import { FETCH_TASKS, STAGE_SELECTED, TASK_POSTED, TASK_DESTROYED } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TASKS: {
      return state.concat(action.payload);
    }
    case TASK_POSTED: {
      if (state.map(task => task.id).includes(action.payload.id)) {
        return state;
      } else {
        const copiedState = state.slice(0);
        copiedState.push(action.payload);
        return copiedState;
      }
    }

    case TASK_DESTROYED: {
      return state;
    }

    case STAGE_SELECTED: {
      return []; // Stage has changed. Clearing view.
    }
    default:
      return state;
  }
}
