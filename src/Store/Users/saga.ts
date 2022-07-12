import { Action } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import { add, del, get, update } from "../../Helpers/api_helpers";
import { AddUserProps, deleteUserProps, getRequest, getUser, GetUserByIdProps, GetUsersProps, updateUserProps } from "../../Helpers/interface";
import { addUserBegin, addUserFail, addUserSuccess, deleteUsersBegin, deleteUsersFail, deleteUsersSuccess, getUserbyIdBegin, getUserbyIdFail, getUserbyIdSuccess, getUsersBegin, getUsersFail, getUsersSuccess, updateUsersBegin, updateUsersFail, updateUsersSuccess } from "./action";
import { ADD_USER, DELETE_USER, GET_USER, GET_USER_BY_ID, UPDATE_USER } from "./actionTypes";
interface AddUserAction extends Action, AddUserProps {type:"ADD_USER"}
interface GetUsersAction extends Action,getRequest {type:"GET_USER"}
interface GetUserByIdAction extends Action, GetUserByIdProps {type:"GET_USER_BY_ID"}
interface UpdateAction extends Action, updateUserProps {type:"UPDATE_USER"}
interface DeleteAction extends Action, deleteUserProps {type:"DELETE_USER"}


// Post a user 

function* addUser(res:AddUserProps):Generator {
    try {
        yield put(addUserBegin())
        const response = yield call(add,"/",res?.data)
        if(response){
        yield put(addUserSuccess())
        res?.callback && res?.callback()
    }
    } catch (error:any) {
        yield put(addUserFail(error))
        
    }
}

// Get all user 


function* getUsers(res:getRequest):Generator {
    try {        
        yield put(getUsersBegin())
        const response = yield call(get,"/",res.data)
        if(response){
        yield put(getUsersSuccess(response as GetUsersProps))
    }
    } catch (error:any) {
        yield put(getUsersFail(error))
        
    }
}

// Get a user 


function* getUserbyId(res:getUser ):Generator {
    try {        
        console.log(res);
        
        yield put(getUserbyIdBegin())
        const response = yield call(get,`/${res.data.id}`)
        if(response){
        yield put(getUserbyIdSuccess(response as GetUserByIdProps))
    }
    } catch (error:any) {
        yield put(getUserbyIdFail(error))
        
    }
}

// Update a user 


function* updateUser(res:updateUserProps):Generator {
    try {        
        yield put(updateUsersBegin ())
        const response = yield call(update,`/${res.id}`,res.data)
        if(response){
        yield put(updateUsersSuccess())
            res.callback && res.callback()
    }
    } catch (error:any) {
        yield put(updateUsersFail(error))
        
    }
}

// Delete a user 

function* deleteUser(res:deleteUserProps):Generator {
    try {
        yield put(deleteUsersBegin ())
        const response = yield call(del,`/${res.id}`)
        if(response){
        yield put(deleteUsersSuccess())
            res.callback && res.callback()
    }
    } catch (error:any) {
        yield put(deleteUsersFail(error))
        
    }
}


function* UserSaga() {
    yield takeLatest<AddUserAction>(ADD_USER,addUser)
    yield takeLatest<GetUsersAction>(GET_USER,getUsers)
    yield takeLatest<GetUserByIdAction>(GET_USER_BY_ID,getUserbyId)
    yield takeLatest<UpdateAction>(UPDATE_USER,updateUser)
    yield takeLatest<DeleteAction>(DELETE_USER,deleteUser)
}
export default UserSaga