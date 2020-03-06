/* eslint no-bitwise:off */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import Task from '../components/task';

class TaskList extends Component {
  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    this.props.fetchTasks(this.props.checklists[0])
  }


  // fetchTasks = () => {
  //   this.props.fetchTasks(this.props.checklists.map((checklist) => {
  //     checklist.id
  //   }));
  // }


  render() {
    return (
      console.log('hi from task list container'),
      console.log(this.props.checklists),
      <div className="tasklist-container">
        <div>
          <h2>TASKLIST CONTAINER</h2>
        </div>
        <div className="tasklist">
          <div>
            {
              this.props.tasks.map((task) => {
                return <Task key={task.id} task={task} />;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    tasks: state.tasks,
    selectedStage: state.selectedStage,
    checklists: state.checklists

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
