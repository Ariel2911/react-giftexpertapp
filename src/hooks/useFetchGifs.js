import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((gifs) => {
      setImages({
        data: gifs,
        loading: false,
      });
    });
  }, [category]);

  // console.log(images)
  return images;
};
