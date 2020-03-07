import React, { Component } from 'react';
const Task = (props) => {
  const { title, note, checklist_id, id } = props.task;
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{note}</p>
      <p>task id: {id}</p>
      <p>task's checklist id: {checklist_id}</p>
    </div>
  );
}
export default Task;
