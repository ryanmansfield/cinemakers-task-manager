import React, { Component } from 'react';
import TaskForm from '../containers/task_form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import Task from '../components/task';
// import Tasks from './tasks';


class CheckList extends Component {
  componentDidMount() {
    // this.setState({ this.props.checklist });
    // this.props.checklist = checklist
    this.fetchTasks();
  }

  // componentDidUpdate () {
  //   this.fetchTasks();
  // }

  //  componentWillReceiveProps(nextProps) { // For after switching channels
  //   if (this.props.checklist != nextProps.checklist) {
  //     this.props.fetchTask(nextProps.checklist);
  //   }
  // }


  fetchTasks = () => {
    this.props.fetchTasks(this.props.checklist)
  }

  render() {
    return (
      console.log('hi from checklist container'),
      // console.log(`hi from checklist ${this.props.checklist.id}`),
      <div className="CheckList-container">
        <div>
          <h2>{this.props.checklist.name}'s container</h2>
        </div>

        <div className="CheckList">
          <div>
            {
              this.props.tasks.map((task) => {
                return <Task key={task.id} task={task} />;
              })
            }
          </div>
        </div>
        <div className="task-form">

        </div>
      </div>
    );
  }
}
//   // <TaskForm />

function mapStateToProps (state) {
  return {
    tasks: state.tasks,
    // selectedStage: state.selectedStage,
    // checklist: state.checklist

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch)
}

// export default connect(mapStateToProps)(CheckList);

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);





