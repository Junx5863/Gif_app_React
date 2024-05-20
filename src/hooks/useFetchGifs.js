

import  { useEffect, useState } from 'react'
import { getGift } from '../helpers/getGif';

export const useFetchGifs = ( category ) => {

    const [imagesList, setImages] = useState([]);
    const [isLoading, setisLoading] = useState( true );

  const getImagesInfo = async () => {
    const images = await getGift(category);

    setImages(images);
    setisLoading(false);
  };

  useEffect(() => {
    getImagesInfo();
  }, []);



  return {
    images: imagesList,
    isLoading,
  };
}
