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

//   //  componentWillReceiveProps(nextProps) { // For after switching channels
//   //   if (this.props.TaskList != nextProps.TaskList) {
//   //     this.props.fetchTask(nextProps.TaskList);
//   //   }
//   // }


//   fetchTasks = () => {
//     this.props.fetchTasks(this.props.checkList)
//   }

//   render() {
//     return (
//       console.log('hi from TaskList container'),
//       // console.log(`hi from TaskList ${this.props.checklist.id}`),
//       <div className="TaskList-container">
//         <div>

//         </div>
//         <div className="TaskList">
//           <div>
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
//     checkLists: state.checklists,
//     checklist: state.checklist,
//     // selectedStage: state.selectedStage,
//     // TaskList: state.TaskList

//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchTasks }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
