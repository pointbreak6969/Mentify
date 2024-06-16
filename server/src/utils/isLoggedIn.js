import axios from 'axios';

async function isLoggedIn() {
  try {
    const response = await axios.get('http://localhost:5000/api/v1/user/me', {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    if (response.status === 200) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error checking login status:', error);
    return null;
  }
}

export default isLoggedIn;
