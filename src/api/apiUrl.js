const baseUrl = process.env.REACT_APP_API_URL;

const apiUrl = {
  auth: {
    login: `${baseUrl}/auth/login`,
    register: `${baseUrl}/auth/register`,
  },
  book: `${baseUrl}/book`,
  genre: `${baseUrl}/genre`,
  author: `${baseUrl}/author`
}

export default apiUrl;