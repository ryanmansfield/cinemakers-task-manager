import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import tasksReducer from './reducers/tasks_reducer';

const projectContainer = document.getElementById('project_app');
const projects = JSON.parse(projectContainer.dataset.project);

const initialState = {
};

const reducers = combineReducers({
  projects: (state = null, action) => state
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
