const baseUrl = 'http://localhost:3000';

const apiUri = {
  auth: {
    login: `${baseUrl}/auth/login`,
    register: `${baseUrl}/auth/register`,
  },
  book: `${baseUrl}/book`,
  genre: `${baseUrl}/genre`,
  author: `${baseUrl}/author`
}

export default apiUri;