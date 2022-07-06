import axios from "axios";

export const fetchData = async (url, option) => {
  const response = await axios.get(url);
  return response.data;
};
