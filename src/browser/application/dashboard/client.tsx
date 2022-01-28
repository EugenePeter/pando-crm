import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { GetSurveyStart } from "./state/survey";

const Client = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(GetSurveyStart());
    getToken()
      .then((access_token) => {
        // access_token && grpcClient(access_token);
      })
      .catch((error) => console.log("ERROR IN RETRIEVING ACCESS TOKEN", error));
  }, []);

  return (
    <div>
      <h1>SURVEY DASHBOARD</h1>
    </div>
  );
};

export default Client;
