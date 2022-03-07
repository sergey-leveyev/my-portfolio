import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  ALL_PROJRCTS_SUCCESS,
  ALL_PROJRCTS_FAIL,
  CLEAR_ERROR,
} from "../constants/tyeps";

export const getProjects = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/projects`);
    dispatch({
      type: ALL_PROJRCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ALL_PROJRCTS_FAIL, payload: error.response.data.message });
  }
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
