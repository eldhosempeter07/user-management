import {  useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkIfValidEmail } from '../Helpers/utils';
import { addUser } from '../Store/Users/action';

const AddUser = () => {
  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const [error,setError] = useState("")

  const formik = useFormik({
    initialValues: {
      email: '',
      statusMessage: '',
      name: '',
      age: '',
      isPublic: "true",
      avatarUrl:""
    },
    onSubmit: values => {
      if(values.age == "" || values.avatarUrl== "" || values.email== "" || values.name=="" || values.statusMessage == "" ){
        return setError("Please enter all the fields")
      }else if(!checkIfValidEmail(values.email)){
        return setError("Enter a valid email address")
      }
      else{
        setError("")
      dispatch(addUser({...values,createdAt:new Date().toISOString()},()=>navigate("/users")
      ))
      }
    },
  });


  
  return  (
    <div className='text-left mt-5'>
            <a href='/users' className='bg-blue-500 px-6 py-2.5 rounded text-white font-medium text-xs  uppercase ml-5 my-5'>User List</a>

      <h1 className='text-center   text-2xl mt-4'>
        Add User
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
         type="text"
         className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <label className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left" htmlFor="age">Age</label>

        <input
         id="age"
         name="age"
         min={1}
         type="number"
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

export default AddUser