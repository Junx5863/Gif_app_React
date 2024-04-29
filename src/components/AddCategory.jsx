import { useState } from "react";



 const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('Naruto');
    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setCategorias( cats => [inputValue, ...cats]);

    }

    return(
        <form onSubmit={ onSubmit }>
            <input type="text" 
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={ handleInputChange } />
        </form>
    );
}

export default AddCategory;