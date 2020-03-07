import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasks, destroyChecklist } from '../actions/index';
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


  handleClick = (checklist) => {
    this.props.destroyChecklist(checklist);
    console.log(`test test ${this.props.checklist.name}`)
  }

  render() {
    return (
      // const { checklist_id } = this.props.checklist.id;
      // console.log('hi from checklist container'),
      console.log(`hi from checklist ${this.props.checklist.id}`),
       console.log(`hi from checklist ${this.props.tasks.checklist_id}`),
      <div className="CheckList-container">
        <div>
          <h2>{this.props.checklist.name}'s container</h2>
        </div>
        <div className="checklist-destroy">
          <button
            onClick={() => this.handleClick(this.props.checklist)}
          >delete this checklist</button>
        </div>

        <div className="CheckList">
          <div>
            {
              this.props.tasks.map((task) => {
                if (task.checklist_id === this.props.checklist.id) { return <Task key={task.id} task={task} />; }

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
   console.log(ownProps);

  return {
    tasks: state.tasks,
    // selectedStage: state.selectedStage,
    // checklist: state.checklist
    // ownProp: ownProps.prop

  };
}

function mapDispatchToProps(dispatch, ownProps) {
   // console.log(ownProps);
  return bindActionCreators({ fetchTasks, destroyChecklist }, dispatch)
}

// export default connect(mapStateToProps)(CheckList);

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);





