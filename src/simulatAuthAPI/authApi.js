export const loginApi = async (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === 'user' &&
        credentials.password === 'password'
      ) {
        resolve({ id: 1, username: 'user' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};
