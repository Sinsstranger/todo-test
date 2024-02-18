import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = React.memo(({ todo, removeTodo, toggleTodoComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoComplete(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
});

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
};

export default TodoItem;
