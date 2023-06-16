import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://tourismo-api.onrender.com/places/');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};