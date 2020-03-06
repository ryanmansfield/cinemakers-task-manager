// import React, { Component } from 'react';
// import TaskForm from '../containers/task_form';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { fetchTasks } from '../actions/index';
// import Task from '../components/task';


// class TaskList extends Component {
//   componentDidMount() {
//     this.fetchTasks();
//   }

//   fetchTasks = () => {
//     this.props.fetchTasks(this.props.checklist)
//   }

//   render() {
//     return (
//       console.log('hi from TaskList container'),
//       console.log(`hi from TaskList ${this.props.checklist}`),
//       <div className="TaskList-container">
//         <div>
//         <div>
//             {
//               this.props.tasks.map((task) => {
//                 return <Task key={task.id} task={task} />;
//               })
//             }
//           </div>

//         </div>

//         <div className="task-form">

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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchTasks }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
