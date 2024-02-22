import '@assets/sass/App.scss';
import InputField from '@core/components/InputField';
import TodoList from '@core/components/TodoList';
import { useSelector } from 'react-redux';

function App() {
  const { status, error } = useSelector((state) => state.todos);
  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <InputField />
      <TodoList />
    </>
  );
}

export default App;
