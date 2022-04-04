import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <li style={{ display: 'flex', flexWrap: 'wrap' }}>
        {loading ? (
          <p>Cargando</p>
        ) : (
          images.map((image) => {
            return <GifGridItem key={image.id} {...image} />;
          })
        )}
      </li>
    </>
  );
};
