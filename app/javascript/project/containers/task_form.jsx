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
        note: ''
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
    console.log("Inside handle submit");
    console.log(`checklist: ${this.props.checklist}`);
    console.log(`VALUE-STATE: ${this.state.title}`);
    console.log(`note: ${this.state.note}`);
    this.props.createTask(this.props.checklist, this.state.title, this.state.note);
    this.props.createTask(this.props.checklist, this.state);
    this.setState({ value: ''});
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const inputs = event.target.getElementsByTagName(‘input’);
  // }

  render() {
    return (
      console.log(this.props.checklist),
      <form onSubmit={this.handleSubmit} className="task-editor">
          <label>
             title:
              <input
                // ref={(input) => {this.messageBox = input; }}
                name="title"
                type="text"
                className="form-control"
                autoComplete="off"
                value={this.state.title}
                onChange={this.handleChange}
              />
          </label>
          <label>
            note:
              <input
                // ref={(input) => {this.messageBox = input; }}
                name="note"
                type="text"
                className="form-control"
                autoComplete="off"
                value={this.state.text}
                onChange={this.handleChange}
              />
          </label>
        <button type="submit">Create Task</button>
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
