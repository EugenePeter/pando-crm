import { SurveyTypes } from "./types";

export const GetSurveyStart = () => ({
  type: SurveyTypes.GET_SURVEYS_START,
});

// export const GetSurveySuccess = (value: any) => {
//   console.log("GET SURVEY SUCCESS:", value);
//   return {
//     type: SurveyTypes.GET_SURVEYS_SUCCESS,
//     payload: value,
//   };
// };

export const GetSurveySuccess = (value) => ({
  type: SurveyTypes.GET_SURVEYS_SUCCESS,
  payload: value,
});
