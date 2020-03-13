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
      return state;
      // return state.map((task) => task.id === action.payload.id)
    }

    // case TASK_UPDATED: {
    //   const newTasks = updateItemInArray(state.tasks, action.payload.id, task => {
    //     return updateObject(task, { is_complete: action.payload.is_complete })
    //   })

    //   return updateObject(state, { tasks: newTasks })
    // }

    case STAGE_SELECTED: {
      return []; // Stage has changed. Clearing view.
    }
    default:
      return state;
  }
}


