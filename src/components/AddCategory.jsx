import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim() );

    setInputValue(""); 
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;
