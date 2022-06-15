import { GET_ALL_USER, GET_USER_BY_ID } from "../actions/userTypes";

const initialState = [];

function userReducer(users = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_USER:
      return payload;

    case GET_USER_BY_ID:
      return payload;

    default:
      return users;
  };
};

export default userReducer;
