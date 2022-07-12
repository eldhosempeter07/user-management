import { UserProps } from "../../Helpers/interface";
import {
  ADD_USER_BEGIN,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER_BEGIN,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_USER_BEGIN,
  GET_USER_BY_ID_BEGIN,
  GET_USER_BY_ID_FAIL,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "./actionTypes";

const inital_state = {
  loading: false,
  error: "",
  userList: [],
  user: {},
  userCount: 0,
};

// Reducer function for users

export const UserReducer = (state = inital_state, action: UserProps) => {
  switch (action.type) {
    case ADD_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        userList: action?.payload?.data,
        userCount: action?.payload?.headers?.["x-total-count"],
      };
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        userList: {},
      };

    case GET_USER_BY_ID_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        user: action.payload,
      };
    case GET_USER_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: {},
      };
    case UPDATE_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
