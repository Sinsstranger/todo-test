import React from 'react';
import PropTypes from 'prop-types';
import { toggleTodoComplete, removeTodo } from '@store';
import { useDispatch } from 'react-redux';

const TodoItem = React.memo(({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodoComplete({ id: todo.id }))}
      />
      <span>{todo.title}</span>
      <button
        type="button"
        onClick={() => dispatch(removeTodo({ id: todo.id }))}>
        &times;
      </button>
    </li>
  );
});

TodoItem.propTypes = {
  todo: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
