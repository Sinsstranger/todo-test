import TodoItem from '@core/components/TodoItem';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
