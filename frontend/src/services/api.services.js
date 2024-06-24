const URL = import.meta.env.VITE_ENDPOINT_URL;

export const getUser = async (id) => {
  const response = await fetch(`${URL}/user/${id}`);  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};