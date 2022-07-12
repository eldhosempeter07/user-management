import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, getUsers } from '../Store/Users/action'
import { RootState } from "../Store/reducer";
import {  UsersProps } from "../Helpers/interface";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
    const dispatch =  useDispatch()
    const users: UsersProps = useSelector((state: RootState) => state.User);

    //Param Request for getting user list 

    const initial_request = {
      _order:"desc",
      _limit:20,
      name_like:'',
      _sort:"createdAt"
    }

    const [request,setRequest] = useState({...initial_request})  


    useEffect(()=>{ 
        request && dispatch(getUsers(request))
    },[request])

    // Function for Delete user 
    const handleDelete = (id:number) =>{
      dispatch(deleteUsers(id,()=>dispatch(getUsers(request))))
    }

    const fetchMoreData = () =>{
      console.log("hi");
      
      setRequest({...request,_limit:request._limit+10})
    }

  return (
    <div  className="min-h-screen container text-center">
      <h1 className='text-3xl my-5 font-bold'>Users</h1>
      <input type="text" className='mx-10 border rounded-lg px-3 py-2 mt-1 mb-5 text-sm'   placeholder='Search by name' onChange={(e)=>setRequest({...request,name_like:e.target.value})}/>
      <select  className='mx-5 bg-gray-100' onChange={(e)=>setRequest({...request,_sort:e.target.value})}>
        <option value= "createdAt" >Created At</option>
        <option value="age">Age</option>
      </select>
      <select  className='mx-5 bg-gray-100 ' onChange={(e)=>setRequest({...request,_order:e.target.value})}>
        <option value= "desc" >Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <a href='/users/create' className='bg-blue-500 px-6 py-2.5 rounded text-white font-medium text-xs  uppercase'>Create New</a>
      <ul>
        {/* Scroll component  */}
        <InfiniteScroll
        dataLength={request._limit}
        next={fetchMoreData}
        hasMore={true}
        loader=""
      >          
        {users?.userList.length ? users?.userList?.map(user=>(
          <div className="flex justify-center my-3 ">
          <div className="justify-center block p-6 rounded-lg shadow-lg bg-white border border-b-gray-300  w-96 flex" key={user.id} >
          <img className="w-20 h-20 rounded-full" src={user.avatarUrl} alt="Default avatar"/>
          <div>
            <h3 className='text-2xl'>{user.name}</h3>
            <p className='text-lg'>{user.statusMessage}</p>
            <p>{user.createdAt}</p>
            <div className='mt-4'>
                <a
                  href={`/users/${user.id}`}
                  className="mr-2 inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs  uppercase rounded 
                  shadow-md hover:bg-gray-700 "
                  >
                  EDIT
                </a>
                <button
                  type="button"
                  onClick={() => handleDelete(user?.id)}
                  className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs 
                  leading-tight uppercase rounded  hover:bg-red-700 "
                  >
                  DELETE
                </button>
            </div>
                    </div>
                  </div>
                </div>
            )) : <h2>No Users Found</h2>}
            </InfiniteScroll>
      </ul>
    </div>
  )
}

export default Home