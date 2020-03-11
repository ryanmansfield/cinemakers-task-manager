import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasks, destroyChecklist } from '../actions/index';
import TaskForm from '../containers/task_form';
import Task from './task';

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {
    this.fetchTasks();
  }


  componentDidUpdate(prevProps) {
  if (this.props.tasks !== prevProps.tasks) {
    this.setState({ isHidden: true });
  }
}


  fetchTasks = () => {
    this.props.fetchTasks(this.props.checklist)
  }


  handleClick = (checklist) => {
    this.props.destroyChecklist(checklist);
  }

  render() {
    return (
      // const { checklist_id } = this.props.checklist.id;
      <div className="checklist">
        <div className='checklist-title'>
          <h2>{this.props.checklist.name}</h2>
          <div className="checklist-destroy">
            <button
              className="btn-destroy"
              onClick={() => this.handleClick(this.props.checklist)}
            ><i className="fas fa-trash"></i></button>
          </div>
        </div>
        <div className="task-list">
          {
            this.props.tasks.map((task) => {
              if (task.checklist_id === this.props.checklist.id) { return <Task key={task.id} task={task} />; }

            })
          }
        </div>
        <div className="task-form">
          <button className="task-button" onClick={this.toggleHidden.bind(this)} >
            <i className="fas fa-plus-circle"></i>
          </button>
          {!this.state.isHidden && <TaskForm checklist={this.props.checklist} />}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
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





