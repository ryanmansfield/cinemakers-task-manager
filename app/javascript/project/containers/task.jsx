import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { destroyTask, updateTask } from '../actions/index';
import Moment from 'react-moment';
import 'moment-timezone';



class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { is_complete: this.props.task.is_complete };
  }

  // componentDidMount() {
    // this.setState({ this.props.checklist });
    // checklist = this.props.checklist
    // this.fetchTasks();
  // }


  //  componentDidUpdate(nextProps) { // For after checklists
  //   if (this.props.checklist != nextProps.checklist) {
  //     this.props.fetchTask(nextProps.checklist);
  //   }
  // }


  updateTask = (task) => {
    this.props.updateTask(task)
                          // this.props.task.id,
                          // this.props.task.checklist,
                          // this.props.task.title,
                          // this.props.task.due_date,
                          // this.props.task.assigned_to,
                          // this.props.task.is_complete);
    // console.log(`Toggle Checkbox ${!this.props.task.is_complete}`)
  }


  handleClick = (task) => {
    this.props.destroyTask(task);
    console.log(`test test ${this.props.task.name}`)
  }

  render() {
    return (
      <div className="task">
        <div className="task-title">
          <h3>{this.props.task.title}</h3>
        </div>
        <div className="task-info">
          <div className="task-due">
            <p>Due: </p>
            <Moment format="MM/DD/YYYY" parse="YYYY-MM-DD">
              {this.props.task.due_date}
            </Moment>

            <div className="task-footer">

              <div className="assigned-to">
                <p>{`Assigned to: ${this.props.task.assigned_to}`}</p>
              </div>
              <div className="task-destroy">
                 <input
                    type="checkbox"
                    onClick={() => this.updateTask(this.props.task)}
                    defaultChecked={this.props.task.is_complete} />
                <button
                  className="task-btn-destroy"
                  onClick={() => this.handleClick(this.props.task)}
                ><i className="fas fa-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



function mapStateToProps (state) {
  return {
    tasks: state.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ destroyTask, updateTask }, dispatch)
}

// export default connect(mapStateToProps)(CheckList);

export default connect(mapStateToProps, mapDispatchToProps)(Task);
