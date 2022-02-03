import axios from "axios";

export const getToken = async () => {
  //TEMPORARY POST REQUEST TO GET ACCESS TOKEN
  //ACCESS TOKEN NEEDED TO COMMUNICATE WITH THE GRPC SERVER
  const URL = "https://login.staging.pandolink.com/connect/token";
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  try {
    const {
      data: { access_token },
    } = await axios.post(
      URL!,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "81CD8602-3B16-4AD6-81EC-89D6B9465F80",
        client_secret: "wbtCpQYNhYcogScfRcZDAMzMYsfKcRzpEvB",
        username: "EugenePando@gmail.com",
        password: "greatSystem30Passw0rd3!",
      }),
      config
    );
    return access_token;
  } catch (e) {
    console.log("current user ERROR:", e);
  }
};
