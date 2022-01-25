import axios from "axios";
import { application_config } from "./dummy-data";
export const getApplicationConfig = async () => {
  const URL = "http://localhost:1010/login";
  try {
    // const { data } = await axios.post(URL, value, {
    //   withCredentials: true,
    // });
    // console.log("IS AUTHORIZED:", data);
    // return data;
    return application_config;
  } catch (e) {
    console.log("current user ERROR:", e);
    console.error(JSON.stringify(e, undefined, 2));
  }
};
