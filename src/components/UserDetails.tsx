import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../state-manager/hooks";
import { updateAddress } from "../state-manager/userListSlice";

const placeholderUser = {
  sex: "",
  address: "",
  name: "",
  email: "",
  birthday: ""
}

function UserDetails({ username }: { username: string }) {
  const user = useAppSelector((state) => state.users.list[username]) || placeholderUser;
  const dispatch = useAppDispatch();
  const [address, setAddress] = useState(user.address);
  
  useEffect(() => {
    setAddress(user.address);
  }, [user]);

  return (
    <div className="modal fade" id="userDetailsModal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">User Details</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              <b>Username: </b>
              {username}
            </p>
            <p>
              <b>Name: </b>
              {user.name}
            </p>
            <p>
              <b>Sex: </b>
              {user.sex}
            </p>
            <p>
              <b>Birthday: </b>
              {user.birthday}
            </p>
            <p>
              <b>Address: </b>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              disabled={address === user.address}
              onClick={() => setAddress(user.address)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => dispatch(updateAddress({ username, address }))}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
