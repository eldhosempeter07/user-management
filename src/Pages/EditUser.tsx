import { Field, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../Store/reducer";
import { UsersProps } from "../Helpers/interface";
import { getUserbyId, updateUsers } from '../Store/Users/action';
import { useNavigate, useParams } from 'react-router-dom';
import { checkIfValidEmail } from '../Helpers/utils';

const EditUser = () => {
    const match = useParams()
    const navigate = useNavigate()
    const dispatch =  useDispatch()
    const [error,setError] = useState("")
    const users: UsersProps = useSelector((state: RootState) => state.User);
    useEffect(()=>{
        dispatch(getUserbyId({id:match.id}))
        
    },[])

// Formik function 
  const formik = useFormik({
    initialValues: {
      email:  users.user.email,
      statusMessage: users.user.statusMessage,
      name: users.user.name,
      age: users?.user?.age,
      isPublic: users.user.isPublic?.toString(),
      avatarUrl:users?.user?.avatarUrl,
      createdAt:users?.user?.createdAt
    },
    enableReinitialize: true,
    onSubmit: values => {
      // Error handling and submittion 
      if(values.age == "" || values.avatarUrl== "" || values.email== "" || values.name=="" || values.statusMessage == "" ){
        return setError("Please enter all the fields")
      }else if(!checkIfValidEmail(values.email)){
        return setError("Enter a valid email address")
      } else {
        setError("")
        if(match?.id)
        dispatch(updateUsers({...values,createdAt:new Date().toISOString()},match?.id,()=>navigate("/users")))      
      }
    },
  });


  return (
    <div className='text-left mt-5'>
            <a href='/users' className='bg-blue-500 px-6 py-2.5 rounded text-white font-medium text-xs  uppercase ml-5 my-5'>User List</a>
      <h1 className='text-2xl mt-4 text-center'>
        User Details
      </h1>
      <form  className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md" onSubmit={formik.handleSubmit}>
      <label className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left" htmlFor="avatarUrl">Avatar Url</label>
       <input
         id="avatarUrl"
         name="avatarUrl"
         type="text"
         className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
         onChange={formik.handleChange}
         value={formik.values.avatarUrl}
       />
       <label className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left" htmlFor="name">Name</label>
       <input
         id="name"
         name="name"
         type="text"
         className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <label className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left"  htmlFor="statusMessage">Status Message</label>

       <input
         id="statusMessage"
         name="statusMessage"
         type="text"
         className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
         onChange={formik.handleChange}
         value={formik.values.statusMessage}
       />
       <label  className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left" htmlFor="email">Email Address</label>

       <input
         id="email"
         name="email"
         type="email"
         className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <label className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left" htmlFor="age">Age</label>

        <input
         id="age"
         name="age"
         type="number"
         min={1}
         className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
         onChange={formik.handleChange}
         value={formik.values.age}
       />
       <div className='text-left'>

          <label  className="font-semibold text-sm text-gray-600 pb-1 ml-1  text-left mr-5">Public</label>
            <label  className="font-semibold text-sm text-gray-600 pb-1 ml-1  text-left  mr-1">
              <input type="radio" name="isPublic" value="true" 
               checked={formik.values.isPublic == "true"}
               onChange={() =>formik.setFieldValue("isPublic","true")}
               />
              Yes
            </label>
            <label  className="font-semibold text-sm text-gray-600 pb-1 ml-1  text-left">
              <input type="radio" name="isPublic" value="false" 
                   checked={formik.values.isPublic == "false"}
                   onChange={() =>formik.setFieldValue("isPublic","false")}
                   />
              No
            </label>
                   </div>
                   {
                    error &&
                   <p className='text-red-600 my-3'>{error}</p>
                   }
       <button className='bg-blue-500 px-8 py-3 rounded text-white font-medium mt-5 text-sm  uppercase' type="submit">Submit</button>
     </form>
    </div>
  )
}

export default EditUser