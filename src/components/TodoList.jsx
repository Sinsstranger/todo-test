import TodoItem from '@core/components/TodoItem.jsx';
import PropTypes from 'prop-types';

const TodoList = ({ todos, removeTodo, toggleTodoComplete }) => {
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
};
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
};
export default TodoList;
