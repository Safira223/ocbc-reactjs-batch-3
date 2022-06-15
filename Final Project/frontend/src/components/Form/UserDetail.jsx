import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import UserService from "../../services/UserService";
import './Form.css';

function UserDetail() {
  const { id } = useParams();

  const [User, setUser] = useState({});

  const getUserId = (id) => {
    UserService.getById(id).then((res) => {
      setUser(res.data);
    });
  };

  useEffect(() => {
    getUserId(id);
  }, [id]);

  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="form-box shadow p-3 mb-5 rounded mt-2 pb-5">
            <h3><strong>User id - {id}</strong></h3>
            <hr />
            <h3>First Name : {User.firstName}</h3>
            <h3>Last Name  : {User.lastName}</h3>
            <Link to="/" className="btn btn-outline-danger float-end">
              Back
            </Link>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default UserDetail;