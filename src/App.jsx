import { useCallback, useState } from 'react';
import TodoItem from '@core/components/TodoItem';
import '@assets/sass/App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const changeInput = (e) => setText(e.target.value);
  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        { id: new Date().toISOString(), text, completed: false },
      ]);
      setText('');
    }
  };
  const removeTodo = useCallback(
    (id) => {
      setTodos((todosList) => todosList.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  const toggleTodoComplete = (id) => {
    setTodos((todosList) =>
      todosList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <>
      <label htmlFor="input-text">
        <input
          type="text"
          id="input-text"
          name="input-text"
          value={text}
          onChange={changeInput}
        />
      </label>
      <button
        onClick={addTodo}
        type="button">
        AddTodo
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodoComplete={toggleTodoComplete}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
