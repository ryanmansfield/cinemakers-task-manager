import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import checklistsReducer from './reducers/checklists_reducer';
import selectedStageReducer from './reducers/selected_stage_reducer';

const projectContainer = document.getElementById('project_app');
const stages = JSON.parse(projectContainer.dataset.stages).map(stage => stage.name);



const initialState = {
  checklists: [],
  stages: stages,
  selectedStage:'pre-production'
};

const reducers = combineReducers({
  stages: (state = null, action) => state,
  selectedStage: selectedStageReducer,
  checklists: checklistsReducer
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/projects/:id/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  projectContainer
);
