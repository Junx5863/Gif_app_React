import AddCategory from "./components/AddCategory";

import { useState } from "react";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const onAddCategory = () => {
    setCategorias(["HunterXHunter", ...categorias]);
    
  };

  return (
    <>
      {/* titulo */}

      <h2>GifExpertApp</h2>

      {/* Input */}
      <AddCategory handleCatoregorys={ setCategorias } />

      {/* Lista de Gif */}
      <button onClick={onAddCategory}> Agregar </button>
      
      
      <ol>
        {categorias.map((categoria) => {
          return <li key={categoria}>{categoria}</li>;
        })}
      </ol>

      {/* Gig Item */}
    </>
  );
};
