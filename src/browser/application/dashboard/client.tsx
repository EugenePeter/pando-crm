import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetSurveyStart } from "./state/survey";
import { GetTokenStart } from "./state/get-token";

const Client = () => {
  const dispatch = useDispatch();
  const client = useSelector(
    ({ grpcClientReducer }: any) => grpcClientReducer.client
  );

  // useEffect(() => {
  //   client && dispatch(GetSurveyStart());
  // }, [client]);

  useEffect(() => {
    dispatch(GetSurveyStart());
  }, []);

  return (
    <div>
      <h1>SURVEY DASHBOARD</h1>
    </div>
  );
};

export default Client;
