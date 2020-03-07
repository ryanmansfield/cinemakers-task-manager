const BASE_URL = '/api/v1';

export const STAGE_SELECTED = 'STAGE_SELECTED';
export const FETCH_CHECKLISTS = 'FETCH_CHECKLISTS';
export const FETCH_TASKS = 'FETCH_TASKS';
export const CHECK_LIST_POSTED = 'CHECK_LIST_POSTED';
export const CHECK_LIST_DESTROYED = 'CHECK_LIST_DESTROYED';

export function selectStage(stage) {
  return {
    type: STAGE_SELECTED,
    payload: stage
  };
}

export function fetchChecklists(stage) {
  const url = `${BASE_URL}/stages/${stage.id}/checklists`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: FETCH_CHECKLISTS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchTasks(checklist) {
  const url = `${BASE_URL}/checklists/${checklist.id}/tasks`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: FETCH_TASKS,
    payload: promise // Will be resolved by redux-promise
  };
}


export function createCheckList(stage, name) {
  const url = `${BASE_URL}/stages/${stage.id}/checklists`;
  const body = { name };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CHECK_LIST_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}


export function destroyChecklist(checklist){
  const url = `${BASE_URL}/checklists/${checklist.id}`;
  // const body = { name };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    // body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CHECK_LIST_DESTROYED,
    payload: promise // Will be resolved by redux-promise
  };
  console.log(`here is the endpoint ${url}`)
}





