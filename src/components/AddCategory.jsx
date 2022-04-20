import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    // console.log('handleInputValue llamado');
  };

  const handleSubmit = (e) => {
    console.log('handleSubmit llamado');
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputValue(e)}
      />
      <button>Add</button>
    </form>
  );
};

AddCategory.protoType = {
  setCategories: PropTypes.func.isRequired,
};
