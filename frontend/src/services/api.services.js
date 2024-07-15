import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/dataMock.js";

const URL = import.meta.env.VITE_ENDPOINT_URL;
const USE_MOCK_DATA = true;

const formatIdToNumber = (id) => {
  return parseInt(id, 10);
};

export const getUser = async (id) => {
  id = formatIdToNumber(id);
  if (USE_MOCK_DATA) {
    const userData = USER_MAIN_DATA.find((user) => user.id === id);
    if (!userData) throw new Error("User not found in mock data");
    return userData;
  } else {
    const response = await fetch(`${URL}/user/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  }
};

export const getActivity = async (id) => {
  id = formatIdToNumber(id);
  if (USE_MOCK_DATA) {
    const activityData = USER_ACTIVITY.find(
      (activity) => activity.userId === id
    );
    if (!activityData) throw new Error("Activity data not found in mock data");
    return activityData;
  } else {
    const response = await fetch(`${URL}/user/${id}/activity`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  }
};

export const getAverageSessions = async (id) => {
  id = formatIdToNumber(id);
  if (USE_MOCK_DATA) {
    const sessionData = USER_AVERAGE_SESSIONS.find(
      (session) => session.userId === id
    );
    if (!sessionData) throw new Error("Session data not found in mock data");
    return sessionData;
  } else {
    const response = await fetch(`${URL}/user/${id}/average-sessions`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  }
};

export const getPerformance = async (id) => {
  id = formatIdToNumber(id);
  if (USE_MOCK_DATA) {
    const performanceData = USER_PERFORMANCE.find(
      (performance) => performance.userId === id
    );
    if (!performanceData)
      throw new Error("Performance data not found in mock data");
    return performanceData;
  } else {
    const response = await fetch(`${URL}/user/${id}/performance`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  }
};
