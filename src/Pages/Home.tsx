import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getUsers } from "../Store/Users/action";
import { UserList, UsersProps } from "../Helpers/interface";
import UserPagination from "../Components/Pagination";
import Modal from "../Components/Modal";

const Home = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState<number>();

  const users: UserList = useSelector(
    (state: UsersProps) => state.UserReducer.userList
  );
  const Count: number = useSelector(
    (state: UsersProps) => state.UserReducer.userCount
  );

  //Param Request for getting user list

  const initial_request = {
    _order: "desc",
    _limit: 20,
    name_like: "",
    _sort: "createdAt",
    _page: 1,
  };

  const [request, setRequest] = useState({ ...initial_request });

  useEffect(() => {
    request && dispatch(getUsers(request));
  }, [request]);

  // Function for Delete user
  const handleDelete = () => {
    console.log(id);

    if (id)
      dispatch(
        deleteUsers(id, () => {
          dispatch(getUsers(request));
          setShowModal(false);
        })
      );
  };

  return (
    <div className="min-h-screen container text-center">
      <h1 className="text-3xl my-5 font-bold">Users</h1>
      <input
        type="text"
        className="mx-10 border rounded-lg px-3 py-2 mt-1 mb-5 text-sm"
        placeholder="Search by name"
        onChange={(e) =>
          setRequest({ ...request, name_like: e.target.value, _page: 1 })
        }
      />
      <select
        className="mx-5 bg-gray-100"
        onChange={(e) =>
          setRequest({ ...request, _sort: e.target.value, _page: 1 })
        }
      >
        <option value="createdAt">Created At</option>
        <option value="age">Age</option>
      </select>
      <select
        className="mx-5 bg-gray-100 "
        onChange={(e) =>
          setRequest({ ...request, _order: e.target.value, _page: 1 })
        }
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <a
        href="/users/create"
        className="bg-blue-500 px-6 py-2.5 rounded text-white font-medium text-sm  uppercase"
      >
        Create New
      </a>
      <ul>
        {users?.length ? (
          users?.map((user) => (
            <div key={user.id} className="flex justify-center my-3 ">
              <div
                className="justify-center  p-6 rounded-lg shadow-lg bg-white border border-b-gray-300  w-96 flex"
                key={user.id}
              >
                <img
                  className="w-20 h-20 rounded-full"
                  src={user.avatarUrl}
                  alt="Default avatar"
                />
                <div className="ml-3">
                  <h3 className="text-2xl">{user.name}</h3>
                  <p className="text-lg">{user.statusMessage}</p>
                  <p>{user.createdAt}</p>
                  <div className="mt-4">
                    <a
                      href={`/users/${user.id}`}
                      className="mr-2 inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs  uppercase rounded 
                  shadow-md hover:bg-gray-700 "
                    >
                      EDIT
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setId(user?.id);
                        setShowModal(true);
                      }}
                      className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs 
                  leading-tight uppercase rounded  hover:bg-red-700 "
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="mt-28 text-2xl ">No Users Found</h2>
        )}
        {users?.length > 0 && (
          <div className="row my-10">
            <UserPagination
              totalRecords={Count * 1}
              setRequest={setRequest}
              request={request}
            />
          </div>
        )}
      </ul>
      <Modal
        handleDelete={handleDelete}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </div>
  );
};

export default Home;
