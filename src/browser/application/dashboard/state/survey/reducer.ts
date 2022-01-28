import { SurveyTypes } from "./types";

export interface ISurveys {
  [index: string]: any;
}
export interface ISurveyReducer {
  getting_surveys: boolean;
  getting_surveys_success: boolean;
  getting_surveys_failure: boolean;
  surveys: null | ISurveys;
}

const INITIAL_STATE: ISurveyReducer = {
  getting_surveys: false,
  getting_surveys_success: false,
  getting_surveys_failure: false,
  surveys: null,
};

export const surveyReducer = (
  state: ISurveyReducer = INITIAL_STATE,
  action: any
) => {
  console.log("WHAT ACTION:", action.type);
  switch (action.type) {
    case SurveyTypes.GET_SURVEYS_START:
      return {
        ...state,
        getting_surveys: true,
      };
    case SurveyTypes.GET_SURVEYS_SUCCESS:
      return {
        ...state,
        survey: {
          ...state.surveys,
          ...action.payload,
        },
      };
    case SurveyTypes.GET_SURVEYS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
