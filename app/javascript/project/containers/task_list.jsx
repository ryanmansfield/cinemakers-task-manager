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

  fetchTask = () => {
    this.props.fetchTask(this.props.Checklists)
  }


  render() {
    return (
      <div>
        <h2>TASKLIST CONTAINER</h2>
      </div>
      // <div className="tasklist-container">
        // <h1>TASKLIST CONTAINER for this.props.checklist</h1>
        // <div>
          // {
          //   this.props.tasks.map((task) => {
          //     return <Task key={task.id} task={task} />;
          //   })
          // }
        // </div>

      // </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    checklists: state.checklists,
    selectedStage: state.selectedStage

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);


//   render() {
//     return (
//       <div className="checklist-container">
//         <h1>TASKLIST CONTAINER</h1>
//           <Task />
//       </div>
//     );
//   }
// }

// export default TaskList;
