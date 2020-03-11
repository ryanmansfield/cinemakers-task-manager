import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { destroyTask } from '../actions/index';



class Task extends Component {
  componentDidMount() {
    // this.setState({ this.props.checklist });
    // checklist = this.props.checklist
    // this.fetchTasks();
  }


  //  componentDidUpdate(nextProps) { // For after checklists
  //   if (this.props.checklist != nextProps.checklist) {
  //     this.props.fetchTask(nextProps.checklist);
  //   }
  // }


  // fetchTasks = () => {
  //   this.props.fetchTasks(this.props.checklist)
  // }


  handleClick = (task) => {
    this.props.destroyTask(task);
    console.log(`test test ${this.props.task.name}`)
  }

  render() {
    return (
      <div className="task">
        <div className="task-title">
          <h3>{this.props.task.title}</h3>
          <div className="task-destroy">
            <button
              className="btn-destroy"
              onClick={() => this.handleClick(this.props.task)}
            ><i className="fas fa-trash"></i></button>
          </div>
        </div>
        <div className="task-info">
          <p>{this.props.task.note}</p>
          <div className="task-due">
            <p>{`Due:
              ${new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit"
              }).format(this.props.due_date)}`}
            </p>

            <p>{`Assigned to: ${this.props.task.assigned_to}`}</p>
            <p>{`Is complete ${this.props.task.is_complete}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {


  return {
    tasks: state.tasks,
    // selectedStage: state.selectedStage,
    // checklist: state.checklist
    // ownProp: ownProps.prop

  };
}

function mapDispatchToProps(dispatch) {
   // console.log(ownProps);
  return bindActionCreators({ destroyTask }, dispatch)
}

// export default connect(mapStateToProps)(CheckList);

export default connect(mapStateToProps, mapDispatchToProps)(Task);
