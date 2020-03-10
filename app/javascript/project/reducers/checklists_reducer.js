import { FETCH_CHECKLISTS, STAGE_SELECTED, CHECK_LIST_POSTED, CHECK_LIST_DESTROYED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CHECKLISTS: {
      return action.payload;
    }
    case CHECK_LIST_POSTED: {
      if (state.map(checklist => checklist.id).includes(action.payload.id)) {
        return state;
      } else {
        const copiedState = state.slice(0);
        copiedState.push(action.payload);
        return copiedState;
      }
    }

    case CHECK_LIST_DESTROYED: {
        return state;
        // return action.payload;
       // return {...state. items: state.items.splice(item.index, 1)};
        // return state.filter(({ id }) => id !== action.payload);
         //  return {
         //   ...state,
         //   checklists: state.checklists.filter((item, index) => index !== action.payload)
         // }
    }

    case STAGE_SELECTED: {
      return []; // Stage has changed. Clearing view.
    }
    default:
      return state;
  }
}



