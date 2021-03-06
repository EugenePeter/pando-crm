import React from "react";
import axios from "axios";
import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { GetSurveyStart } from "./state/survey";
import { GetTokenStart } from "./state/get-token";

const Client = () => {
  const dispatch = useDispatch();
  const client = useSelector(
    ({ grpcClientReducer }: any) => grpcClientReducer.client
  );

  useEffect(() => {
    client && dispatch(GetSurveyStart());
  }, [client]);

  return (
    <div>
      <h1>SURVEY DASHBOARD</h1>
    </div>
  );
};

export default React.memo(Client);
