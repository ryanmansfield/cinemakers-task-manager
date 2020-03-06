import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import TaskForm from '../containers/task_form';
import Task from '../components/task';
// import Tasks from './tasks';


class CheckList extends Component {
  componentDidMount() {
    // this.setState({ this.props.checklist });
    // checklist = this.props.checklist
    this.fetchTasks();
  }


  //  componentDidUpdate(nextProps) { // For after checklists
  //   if (this.props.checklist != nextProps.checklist) {
  //     this.props.fetchTask(nextProps.checklist);
  //   }
  // }


  fetchTasks = () => {
    this.props.fetchTasks(this.props.checklist)
  }

  render() {
    return (
      // console.log('hi from checklist container'),
      console.log(`hi from checklist ${this.props.checklist.id}`),
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

function mapStateToProps (state, ownProps) {
   // console.log(ownProps);

  return {
    tasks: state.tasks,
    // selectedStage: state.selectedStage,
    // checklist: state.checklist
    // ownProp: ownProps.prop

  };
}

function mapDispatchToProps(dispatch, ownProps) {
   // console.log(ownProps);
  return bindActionCreators({ fetchTasks }, dispatch)
}

// export default connect(mapStateToProps)(CheckList);

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);





