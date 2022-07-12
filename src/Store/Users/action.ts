import { GetUsersProps } from "../../Helpers/interface";
import {
  ADD_USER,
  ADD_USER_BEGIN,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_BEGIN,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_USER,
  GET_USER_BEGIN,
  GET_USER_BY_ID,
  GET_USER_BY_ID_BEGIN,
  GET_USER_BY_ID_FAIL,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "./actionTypes";

// Action for user post request

export const addUser = (data: object, callback: () => void) => ({
  type: ADD_USER,
  data: data,
  callback: callback,
});

export const addUserBegin = () => ({
  type: ADD_USER_BEGIN,
});

export const addUserSuccess = () => ({
  type: ADD_USER_SUCCESS,
});

export const addUserFail = (error: string) => ({
  type: ADD_USER_FAIL,
  payload: error,
});

// Action for get all users according to params

export const getUsers = (data?: object) => ({
  type: GET_USER,
  data: data,
});

export const getUsersBegin = () => ({
  type: GET_USER_BEGIN,
});

export const getUsersSuccess = (data: GetUsersProps) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});

export const getUsersFail = (error: any) => ({
  type: GET_USER_FAIL,
  payload: error,
});

// Action for get a user by id

export const getUserbyId = (data: object) => ({
  type: GET_USER_BY_ID,
  data: data,
});

export const getUserbyIdBegin = () => ({
  type: GET_USER_BY_ID_BEGIN,
});

export const getUserbyIdSuccess = (data: object) => ({
  type: GET_USER_BY_ID_SUCCESS,
  payload: data,
});

export const getUserbyIdFail = (error: any) => ({
  type: GET_USER_BY_ID_FAIL,
  payload: error,
});

// Action for update a user

export const updateUsers = (
  data: object,
  id: string,
  callback: () => void
) => ({
  type: UPDATE_USER,
  data: data,
  id: id,
  callback: callback,
});

export const updateUsersBegin = () => ({
  type: UPDATE_USER_BEGIN,
});

export const updateUsersSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
});

export const updateUsersFail = (error: any) => ({
  type: UPDATE_USER_FAIL,
  payload: error,
});

// Action for delete a user

export const deleteUsers = (id: number, callback: () => void) => ({
  type: DELETE_USER,
  id: id,
  callback: callback,
});

export const deleteUsersBegin = () => ({
  type: DELETE_USER_BEGIN,
});

export const deleteUsersSuccess = () => ({
  type: DELETE_USER_SUCCESS,
});

export const deleteUsersFail = (error: any) => ({
  type: DELETE_USER_FAIL,
  payload: error,
});
