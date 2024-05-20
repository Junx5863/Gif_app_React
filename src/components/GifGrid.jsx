import { GifItemList } from "./GifItemList";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <p>Loading...</p>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItemList key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
