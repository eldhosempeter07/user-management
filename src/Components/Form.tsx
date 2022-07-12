import { Field, useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/reducer";
import { formProps, UserItem, UsersProps } from "../Helpers/interface";
import { addUser, getUserbyId, updateUsers } from "../Store/Users/action";
import { useNavigate, useParams } from "react-router-dom";
import { checkIfValidEmail } from "../Helpers/utils";

const Form = (props: formProps) => {
  const match = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const user: UserItem = useSelector(
    (state: UsersProps) => state.UserReducer.user
  );
  useEffect(() => {
    props.type == "update" && dispatch(getUserbyId({ id: match.id }));
  }, [props.type]);

  let addInitialValues = {
    email: "",
    statusMessage: "",
    name: "",
    age: "",
    isPublic: "false",
    avatarUrl: "",
  };

  let editInitialValues = {
    email: user.email || "",
    statusMessage: user.statusMessage || "",
    name: user.name || "",
    age: user.age || "",
    isPublic: user?.isPublic?.toString() || false,
    avatarUrl: user?.avatarUrl || "",
  };

  // Formik function
  const formik = useFormik({
    initialValues: props.type == "add" ? addInitialValues : editInitialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      // Error handling and submittion
      if (
        values.age == "" ||
        values.avatarUrl == "" ||
        values.email == "" ||
        values.name == "" ||
        values.statusMessage == ""
      ) {
        return setError("Please enter all the fields");
      } else if (!checkIfValidEmail(values.email)) {
        return setError("Enter a valid email address");
      } else {
        setError("");
        if (props.type == "update") {
          if (match?.id)
            dispatch(
              updateUsers(
                { ...values, createdAt: new Date().toISOString() },
                match?.id,
                () => navigate("/users")
              )
            );
        } else if (props.type == "add") {
          dispatch(
            addUser({ ...values, createdAt: new Date().toISOString() }, () =>
              navigate("/users")
            )
          );
        }
      }
    },
  });

  return (
    <div>
      <form
        className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md"
        onSubmit={formik.handleSubmit}
      >
        <label
          className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left"
          htmlFor="avatarUrl"
        >
          Avatar Url
        </label>
        <input
          id="avatarUrl"
          name="avatarUrl"
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          onChange={formik.handleChange}
          value={formik.values.avatarUrl}
        />
        <label
          className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label
          className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left"
          htmlFor="statusMessage"
        >
          Status Message
        </label>

        <input
          id="statusMessage"
          name="statusMessage"
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          onChange={formik.handleChange}
          value={formik.values.statusMessage}
        />
        <label
          className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left"
          htmlFor="email"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label
          className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left"
          htmlFor="age"
        >
          Age
        </label>

        <input
          id="age"
          name="age"
          type="number"
          min={1}
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <div className="text-left">
          <label className="font-semibold text-sm text-gray-600 pb-1 ml-1  text-left mr-5">
            Public
          </label>
          <label className="font-semibold text-sm text-gray-600 pb-1 ml-1  text-left  mr-1">
            <input
              type="radio"
              name="isPublic"
              value="true"
              checked={formik.values.isPublic == "true"}
              onChange={() => formik.setFieldValue("isPublic", "true")}
            />
            Yes
          </label>
          <label className="font-semibold text-sm text-gray-600 pb-1 ml-1  text-left">
            <input
              type="radio"
              name="isPublic"
              value="false"
              checked={formik.values.isPublic == "false"}
              onChange={() => formik.setFieldValue("isPublic", "false")}
            />
            No
          </label>
        </div>
        {error && <p className="text-red-600 my-3">{error}</p>}
        <button
          className="bg-blue-500 px-8 py-3 rounded text-white font-medium mt-5 text-sm  uppercase"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
