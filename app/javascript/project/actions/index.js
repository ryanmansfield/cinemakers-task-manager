const BASE_URL = '/api/v1/stages';

export const STAGE_SELECTED = 'STAGE_SELECTED';
export const FETCH_CHECKLISTS = 'FETCH_CHECKLISTS';

export function fetchChecklists(stage) {
  const url = `${BASE_URL}/${stage}/checklists`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: FETCH_CHECKLISTS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function selectStage(stage) {
  return {
    type: STAGE_SELECTED,
    payload: stage
  };
}


