import { getGift } from "../helpers/getGif";
import { useState, useEffect } from "react";
import { GifItemList } from './GifItemList';

export const GifGrid = ({ category }) => {
  const [imagesList, setImages] = useState([]);

  const getImagesInfo = async() => {
    const images = await getGift(category);
    
    setImages(images);
  };

  useEffect(() => {
    getImagesInfo();
  }, []);


  return (
    <>
      <h3>{category}</h3>
      <div>
        {imagesList.map(({id, title}) => (
          <GifItemList />
          
        ))}
      </div>
    </>
  );
};
