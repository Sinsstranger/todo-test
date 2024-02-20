import TodoItem from '@core/components/TodoItem';
import PropTypes from 'prop-types';

function TodoList({ todos, removeTodo, toggleTodoComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
};
export default TodoList;
