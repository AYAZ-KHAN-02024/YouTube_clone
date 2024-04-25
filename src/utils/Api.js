import axios from 'axios';

const YOUTUBE_URL = 'https://youtube-v31.p.rapidapi.com';
const APIKeys = [
  import.meta.env.VITE_APP_YT_API_KEY1,
  import.meta.env.VITE_APP_YT_API_KEY2,
  import.meta.env.VITE_APP_YT_API_KEY3,
  import.meta.env.VITE_APP_YT_API_KEY4,
  import.meta.env.VITE_APP_YT_API_KEY5
];

const options = (APIKey) => {
  return {
    params: {
      maxResults: '48',
    },
    headers: {
      'X-RapidAPI-Key': APIKey,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
};

export const FetchApi = async (url) => {
  try {
    let getData;
    for (const APIKey of APIKeys) {
      try {
        getData = await axios.get(`${YOUTUBE_URL}/${url}`, options(APIKey));        
        break; // Break the loop if request succeeds
      } catch (error) {
        console.log("api quota reached");
      }  
    }
    return getData;
  } catch (error) {
    console.log(error, 'API under development');
  }
};
