import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/TodoSlice';

const InputField = React.memo(() => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="button"
        onClick={() => dispatch(addTodo({ text }))}>
        Add
      </button>
    </>
  );
});

export default InputField;
