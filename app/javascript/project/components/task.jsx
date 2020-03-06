import React, { Component } from 'react';

const Task = (props) => {
  const { title, note, checklist_id } = props.task;
  console.log(`hi from task ${id} on ${checklist_id}`);

  return (
    <div className="task">
      <h1>TASK</h1>
    </div>
  );
}

export default Task;
