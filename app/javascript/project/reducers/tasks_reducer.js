import { FETCH_TASKS, STAGE_SELECTED, TASK_POSTED, TASK_DESTROYED, TASK_UPDATED } from '../actions';

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
      return state.filter((task)  => task.id !== action.payload.id);
    }



    case TASK_UPDATED: {
      return state.map((task) => {
        if (task.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return task
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...task,
          ...action.payload
        }
      })
    }

    case STAGE_SELECTED: {
      return []; // Stage has changed. Clearing view.
    }
    default:
      return state;
  }
}



