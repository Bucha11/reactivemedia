import { usersApi } from "../API/api";
const SET_USERS = "SET_USERS";
const GET_POSTS = "GET_POSTS";
const UPDATING_USER = "UPDATING_USER";
const ADD_USER = "ADD_USER";
const IS_FETCHING = "IS_FETCHING";
const InitialState = {
  users: [],
  posts: [],
  isFetching: false,
};
export const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    case GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.posts],
      };

    case UPDATING_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.patch.id) {
            return { ...u, ...action.patch };
          }
          return u;
        }),
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };

    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    posts,
  };
};

const UpdatingUser = (patch) => {
  return {
    type: UPDATING_USER,
    patch,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

const isFetching = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching,
  };
};

export const setUsersThunk = () => async (dispatch) => {
  dispatch(isFetching(true));
  const data = await usersApi.getUsers();
  dispatch(isFetching(false));
  dispatch(setUsers(data));
};

export const getPostsThunk = (id) => async (dispatch) => {
  // dispatch(isFetching(true));
  const data = await usersApi.getPosts(id);
  // dispatch(isFetching(false));
  dispatch(getPosts(data));
};

export const UpdatingUserThunk = (patch) => async (dispatch) => {
  dispatch(isFetching(true));
  const res = await usersApi.updatingUser(patch);
  dispatch(isFetching(false));
  if (res.status === 200) {
    dispatch(UpdatingUser(patch));
  } else {
    console.log("someEror");
  }
};

export const addUserThunk = (user) => async (dispatch) => {

  dispatch(isFetching(true));
  const res = await usersApi.addUser(user);
  dispatch(isFetching(false));
  if (res.status === 201) {
    dispatch(addUser(user));
  } else {
    console.log("someEror");
  }
};
