import Form from "../Components/Form";

const AddUser = () => {
  return (
    <div className="text-left mt-5">
      <a
        href="/users"
        className="bg-blue-500 px-6 py-2.5 rounded text-white font-medium text-sm  uppercase ml-5 my-5"
      >
        User List
      </a>
      <h1 className="text-center   text-2xl mt-4">Add User</h1>
      <Form type="add" />
    </div>
  );
};

export default AddUser;
