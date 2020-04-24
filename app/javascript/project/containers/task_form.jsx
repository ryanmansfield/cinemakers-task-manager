import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTask } from '../actions/index';

class TaskForm extends Component {
  constructor(props) {
    // console.log(props)
    super(props);
    // this.state = { value: '' };
      this.state = {
        title: '',
        due_date: '',
        assigned_to: '',

      };
  }

  componentDidMount() {
    // this.messageBox.focus();
  }

  // handleChange = (event) => {
  //   this.setState({ value: event.target.value });

  // }

  handleChange = (event) => {
    // console.log("new value", event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Inside handle submit");
    this.props.createTask(
                          this.props.checklist,
                          this.state.title,
                          this.state.due_date,
                          this.state.assigned_to);
    this.setState(
                  {
                    title: '',
                    due_date: '',
                    assigned_to: '',
    });
  }

  render() {
    return (
      // console.log(this.props.checklist),
      <form onSubmit={this.handleSubmit} className="task-editor">
        <div className="form-row">
          <div className="col">
            <label>
              Task
              <input
                // ref={(input) => {this.messageBox = input; }}
                name="title"
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder="Task"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <label>
              Due Date
              <input
                // ref={(input) => {this.messageBox = input; }}
                name="due_date"
                type="date"
                className="form-control"
                autoComplete="off"
                // label="Due Date"
                value={this.state.due_date}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="col">
            <label>
              Assigned To
              <input
                // ref={(input) => {this.messageBox = input; }}
                name="assigned_to"
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder="Assigned To"
                value={this.state.assigned_to}
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>
        <div className="form-row task-save-btn">
          <button type="submit" className="btn-primary">Save Task</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTask }, dispatch)
}

function mapStateToProps (state) {
  return {
    // currentUser: state.currentUser,
    // selectedChannel: state.selectedChannel
    // checklists: state.checklists
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
