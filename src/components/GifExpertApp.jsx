import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './Gifgrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['dog']);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};
