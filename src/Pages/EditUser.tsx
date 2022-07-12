import Form from "../Components/Form";

const EditUser = () => {
  return (
    <div className="text-left mt-5">
      <a
        href="/users"
        className="bg-blue-500 px-6 py-2.5 rounded text-white font-medium text-sm  uppercase ml-5 my-5"
      >
        User List
      </a>
      <h1 className="text-2xl mt-4 text-center">User Details</h1>
      <Form type="update" />
    </div>
  );
};

export default EditUser;
