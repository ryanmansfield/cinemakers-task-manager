/* eslint no-bitwise:off */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { selectStage, fetchChecklists } from '../actions/index';

import Task from '../components/task';

class TaskList extends Component {

  render() {
    return (
      <div className="checklist-container">
        <h1>TASKLIST CONTAINER</h1>
          <Task />
      </div>
    );
  }
}

export default TaskList;
