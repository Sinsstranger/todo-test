import { useCallback, useState } from 'react';
import TodoItem from '@core/components/TodoItem';
import '@assets/sass/App.scss';
import InputField from '@core/components/InputField';
import TodoList from '@core/components/TodoList.jsx';

function App() {
  const [text, setText] = useState('');
  const changeInput = (e) => setText(e.target.value);

  return (
    <>
      <InputField
        changeInput={changeInput}
        text={text}
      />
      <TodoList />
    </>
  );
}

export default App;
