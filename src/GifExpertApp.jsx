import AddCategory from "./components/AddCategory";

import { useState } from "react";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([
    "One Punch",
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
