import axios from "axios";
export const login = async (value) => {
  console.log("API VALUE:", value)
  try {
    const { data } = await axios.get("http://localhost:1010/login", {
      withCredentials: true,
    });
    // console.log("IS AUTHORIZED:", data);
    return data;
  } catch (e) {
    console.log("current user ERROR:", e);
    console.error(JSON.stringify(e, undefined, 2));
  }
};
