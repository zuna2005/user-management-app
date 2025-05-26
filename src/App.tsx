import { useState } from "react";
import UserDetails from "./components/UserDetails";
import { useAppSelector, useAppDispatch } from "./state-manager/hooks";
import { createUser, del } from "./state-manager/userListSlice";
import Delete from "./assets/delete-red.svg";

function App() {
  const users = useAppSelector((state) => state.users.list);
  const status = useAppSelector((state) => state.users.status);
  const dispatch = useAppDispatch();
  const [focusedUser, setFocusedUser] = useState("test");

  return (
    <div className="m-3">
      <UserDetails username={focusedUser} />
      <div className="d-flex justify-content-between my-4">
        <h2>Users</h2>
        <button
          className="btn btn-outline-dark py-0"
          disabled={status !== "idle"}
          onClick={() => dispatch(createUser())}
        >
          <span className="fs-2 align-middle">+</span>
          <span className="align-middle"> Add</span>
        </button>
      </div>
      <div className="position-relative">
        {status === "loading" && (
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center z-10 bg-white bg-opacity-50">
            <div className="spinner-border text-primary">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(users).map((username, index) => {
              const { address, email } = users[username];
              return (
                <tr key={username} onClick={() => setFocusedUser(username)}>
                  <th
                    data-bs-toggle="modal"
                    data-bs-target="#userDetailsModal"
                    style={{ cursor: "pointer" }}
                  >
                    {index + 1}
                  </th>
                  <td
                    data-bs-toggle="modal"
                    data-bs-target="#userDetailsModal"
                    style={{ cursor: "pointer" }}
                  >
                    {username}
                  </td>
                  <td
                    data-bs-toggle="modal"
                    data-bs-target="#userDetailsModal"
                    style={{ cursor: "pointer" }}
                  >
                    {address}
                  </td>
                  <td
                    data-bs-toggle="modal"
                    data-bs-target="#userDetailsModal"
                    style={{ cursor: "pointer" }}
                  >
                    {email}
                  </td>
                  <td>
                    <button
                      className="btn p-0"
                      onClick={() => dispatch(del(username))}
                    >
                      <img src={Delete} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {Object.keys(users).length === 0 && (
          <p className="text-center mt-4">
            There are no users. Click the Add button to create a new one.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
