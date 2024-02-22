import TodoItem from '@core/components/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '@store';
import { useEffect } from 'react';

function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  const todos = useSelector((state) => state.todos.items);
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
