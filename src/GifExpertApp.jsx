import { AddCategory, GifGrid} from "./components";


import { useState } from "react";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([
    "One Piece",
  ]);

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;

    setCategorias([newCategory, ...categorias]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      
      <AddCategory onNewCategory={onAddCategory} />

      {categorias.map((categoria) => (
        <GifGrid 
        key={categoria} 
        category={categoria} 
        />
      ))
      }

      {/* Gig Item */}
    </>
  );
};
