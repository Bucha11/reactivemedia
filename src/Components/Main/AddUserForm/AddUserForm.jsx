import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserThunk } from "../../../Redux/Reducer";
import style from "./AddUserForm.module.css";

export const AddUserForm = (props) => {
  const [userForm, setUserForm] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
  });
  const handlerChange = (e) => {
    setUserForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const dispatch = useDispatch();
  const addingUser = (userInfo) => {
    userInfo.id = props.id + 1;

    dispatch(addUserThunk(userInfo));
  };
  return (
    <div className={style.addUserForm}>
      <h2>Adding new User</h2>
      <div className={style.userInfoView}>
        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={handlerChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="phone"
          value={userForm.phone}
          onChange={handlerChange}
          placeholder="Phone"
        />
        <input
          type="text"
          name="email"
          value={userForm.email}
          onChange={handlerChange}
          placeholder="Email"
        />

        <input
          type="text"
          name="website"
          value={userForm.email}
          onChange={handlerChange}
          placeholder="Website"
        />
      </div>
      <div className={style.button}>
        <button
          onClick={() => {
            addingUser(userForm);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
