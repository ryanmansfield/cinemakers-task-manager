import React, { Component } from 'react';
import TaskList from '../containers/task_list';
import TaskForm from '../containers/task_form';

const CheckList = (props) => {
  const { name } = props.checklist;
  // console.log(name);

  return (
    <h1>{name}</h1>
     // <TaskList/>
      // <TaskForm/>


  );
}

export default CheckList;
