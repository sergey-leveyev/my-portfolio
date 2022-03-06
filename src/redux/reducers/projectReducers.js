import {
  ALL_PROJRCTS_SUCCESS,
  ALL_PROJRCTS_FAIL,
  CLEAR_ERROR,
} from "../constants/tyeps";

//All project reducer
export const allProjectsReducer = (state = { allProjects: [] }, action) => {
  switch (action.type) {
    case ALL_PROJRCTS_SUCCESS:
      return {
        projectCount: action.payload.projectCount,
        resPerPage: action.payload.resPerPage,
        filteredProjectsCount: action.payload.filteredProjectsCount,
        allProjects: action.payload.projects,
      };

    case ALL_PROJRCTS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
