import React, { Component } from 'react';
import TaskList from '../containers/task_list';
import TaskForm from '../containers/task_form';

const CheckList = (props) => {
  const { name, id } = props.checklist;
  // console.log(id);
  console.log(`hi from checklist ${id}`);

  return (
    <div className="checklist">
      <h1>{name}</h1>
      <div className="tasklist-container">
        <TaskList/>
      </div>
      <div className="task-form">
        <h6>TODO TASK FORM</h6>
      </div>
    </div>


  );
}

export default CheckList;
  // <TaskForm />
