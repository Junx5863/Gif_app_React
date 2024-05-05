

export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=5Cy30PGqADSjuTfXh3r4jAbIMPbU1K6g&q=${category }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      };
    });

    return gifs;
  };