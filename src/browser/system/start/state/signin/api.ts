import axios from "axios";
export const login = async (value) => {
  const URL = "http://localhost:1010/login";
  console.log("login value:", value);
  try {
    const { data } = await axios.post(URL, value, {
      withCredentials: true,
    });
    console.log("IS AUTHORIZED:", data);
    return data;
  } catch (e) {
    console.log("current user ERROR:", e);
    console.error(JSON.stringify(e, undefined, 2));
  }
};
