import axios from 'axios';

axios.defaults.baseURL = 'https://64443297466f7c2b4b63e508.mockapi.io/';

export async function fetchTweets(page) {
  const response = await axios(`/tweets?page=${page}&limit=3`);
  return response.data;
}
