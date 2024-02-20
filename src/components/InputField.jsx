import React from 'react';
import PropTypes from 'prop-types';

const InputField = React.memo(({ text, changeInput, addTodo }) => {
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={changeInput}
      />
      <button
        type="button"
        onClick={addTodo}>
        Add
      </button>
    </>
  );
});

InputField.propTypes = {
  text: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default InputField;
