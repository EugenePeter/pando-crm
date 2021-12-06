import axios from "axios";
export const checkAuthorization = async () => {
  try {
    const { data } = await axios.get("http://localhost:9090/currentuser", {
      withCredentials: true,
    });
    // //TEMPORARY, REMOVE AFTER TESTING
    // if (data.isAuthorize === false) {
    //   return {
    //     isAuthorize: true,
    //   };
    // }
    return data;
  } catch (e) {
    console.log("current user ERROR:", e);
    console.error(JSON.stringify(e, undefined, 2));
  }
};
