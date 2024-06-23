/* eslint-disable react/prop-types */
function Todo({ task, isDone }) {
  if (isDone) {
    return <li>Finished: {task}</li>;
  }
  return <li>Work on {task}</li>;
}

export default Todo;
