// import React, { Component } from 'react';
// import TaskForm from '../containers/task_form';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { fetchTasks } from '../actions/index';
// import Task from '../components/task';


// class Tasks extends Component {
//   componentDidMount() {
//     this.fetchTasks();
//   }

//   componentDidUpdate() {
//     this.fetchTasks();
//   }

//   fetchTasks = () => {
//     this.props.fetchTasks(this.props.checklist)
//   }

//   render() {
//     return (
//       console.log('hi from checklist container'),
//       console.log(`hi from checklist ${this.props.checklist.id}`),
//       <div className="CheckList-container">
//         <div className="CheckList">
//           <div>
//             {
//               this.props.tasks.map((task) => {
//                 return <Task key={task.id} task={task} />;
//               })
//             }
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// //   // <TaskForm />

// function mapStateToProps (state) {
//   return {
//     tasks: state.tasks,
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
