import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  ALL_PROJRCTS_SUCCESS,
  ALL_PROJRCTS_FAIL,
  CLEAR_ERROR,
} from "../constants/tyeps";

export const getProjects =
  (req, currentPageNo = 1) =>
  async (dispatch) => {
    try {
      const { origin } = absoluteUrl(req);
      const { data } = await axios.get(
        `${origin}/api/projects?page=${currentPageNo}`
      );
      dispatch({
        type: ALL_PROJRCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PROJRCTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
