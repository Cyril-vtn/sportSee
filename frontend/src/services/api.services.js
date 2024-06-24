const URL = import.meta.env.VITE_ENDPOINT_URL;

export const getUser = async (id) => {
  const response = await fetch(`${URL}/user/${id}`);  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

export const getActivity = async (id) => {
  const response = await fetch(`${URL}/user/${id}/activity`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
}

export const getAverageSessions = async (id) => {
  const response = await fetch(`${URL}/user/${id}/average-sessions`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
}

export const getPerformance = async (id) => {
  const response = await fetch(`${URL}/user/${id}/performance`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
}