import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = import.meta.env.VITE_PIXABAY_KEY;
// VITE_PIXABAY_KEY=54244805-3431f894e484dfd9b88b609d0

const API_KEY = '54244805-3431f894e484dfd9b88b609d0';
if (!API_KEY) {
  console.error('❌ VITE_PIXABAY_KEY не найден в .env');
}

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
