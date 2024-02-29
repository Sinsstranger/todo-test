import TodoItem from '@core/components/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '@store';
import { useEffect } from 'react';

function TodoList() {
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  const todos = useSelector((state) => state.todos.items);
  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
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
