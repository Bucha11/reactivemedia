import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Main } from "./Components/Main/Main";
import { setUsersThunk } from "./Redux/Reducer";
import { NavLink } from "react-router-dom";

export const App = () => {
  const isFetching = useSelector((state) => state.isFetching);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsersThunk());
  }, []);

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <div className="homeBtn">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="name">User Control </div>
          <div className="addBtn">
            <NavLink to="/login">Add User</NavLink>
          </div>
        </div>
      </header>
      {!isFetching ? <Main /> : "loading"}
    </div>
  );
};
