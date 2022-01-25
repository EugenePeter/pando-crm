import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Client = () => {
  const getToken = async () => {
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
          client_id: "687E1D75-6BEE-4FB8-B79A-A9B0142E0282",
          client_secret: "3e8HCTcSv4zxCQNLqSppfX3rgN4x7682u9Y",
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

  useEffect(() => {
    getToken()
      .then((access_token) => console.log("GOT THE ACCESS TOKEN", access_token))
      .catch((error) => console.log("ERROR IN RETRIEVING ACCESS TOKEN"));
  }, []);

  return (
    <div>
      <h1>SURVEY DASHBOARD</h1>
    </div>
  );
};

export default Client;
