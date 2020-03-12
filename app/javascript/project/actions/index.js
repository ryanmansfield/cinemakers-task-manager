const BASE_URL = '/api/v1';

export const STAGE_SELECTED = 'STAGE_SELECTED';
export const FETCH_CHECKLISTS = 'FETCH_CHECKLISTS';
export const FETCH_TASKS = 'FETCH_TASKS';
export const CHECK_LIST_POSTED = 'CHECK_LIST_POSTED';
export const CHECK_LIST_DESTROYED = 'CHECK_LIST_DESTROYED';
export const TASK_POSTED = 'TASK_POSTED';
export const TASK_DESTROYED = 'TASK_DESTROYED';
export const TASK_UPDATED = 'TASK_UPDATED';

export function selectStage(stage) {
  return {
    type: STAGE_SELECTED,
    payload: stage
  };
}

// CHECKLISTS ACTIONS
export function fetchChecklists(stage) {
  const url = `${BASE_URL}/stages/${stage.id}/checklists`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: FETCH_CHECKLISTS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createCheckList(stage, name) {
  // console.log('inside createchecklist')
  // console.log({name})
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
  // console.log(`hi from inside checklist destroy ${checklist.id}`)
  const url = `${BASE_URL}/stages/${checklist.stage_id}/checklists/${checklist.id}`;
  const body = { checklist };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const promise = fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: "same-origin",
      body: JSON.stringify(body)
       }).then(r => r.json())
  return {
    type: CHECK_LIST_DESTROYED,
    payload: promise // Will be resolved by redux-promise
  };
}

// TASKS API CALLS

export function fetchTasks(checklist) {
  const url = `${BASE_URL}/checklists/${checklist.id}/tasks`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());
   // console.log({promise})
  return {
    type: FETCH_TASKS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createTask(checklist, title, note, due_date, assigned_to) {
  // console.log('inside createTask redux function')
  // console.log({checklist});
  // console.log({title});
  // console.log({note});
  const url = `${BASE_URL}/checklists/${checklist.id}/tasks`;
  const body = { title, note, due_date, assigned_to };
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
  // console.log('tttteeeessttt');

  return {
    type: TASK_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}



export function destroyTask(task){
  //  console.log('inside destroyTask redux function')
  // console.log({task});
  const url = `${BASE_URL}/tasks/${task.id}`;
  const body = { task };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const promise = fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: "same-origin",
      body: JSON.stringify(body)
       }).then(r => r.json())

  return {
    type: TASK_DESTROYED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function updateTask(task) {
  console.log('inside updateTask redux function')
  console.log({task});
  // console.log({title});
  // console.log({note});
  const url = `${BASE_URL}/checklists/${checklist.id}/tasks`;
  const body = { title, note, due_date, assigned_to };
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
  // console.log('tttteeeessttt');

  return {
    type: TASK_UPDATED,
    payload: promise // Will be resolved by redux-promise
  };
}



