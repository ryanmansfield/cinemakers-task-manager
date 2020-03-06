import React, { Component } from 'react';
const Task = (props) => {
  const { title, note } = props.task;
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{note}</p>
    </div>
  );
}
export default Task;
