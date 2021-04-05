import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdatingUserThunk } from "../../../../Redux/Reducer";
import style from "./UserCardEdit.module.css";

export const UserCardEdit = (props) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(props.data);
  const handlerChange = (e) => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
        patch: { ...prevState.patch, [e.target.name]: e.target.value },
      };
    });
  };
  const updatingUser = (userInfo) => {
    const patch = userInfo.patch;
    if (patch) {
      patch.id = userInfo.id;
      dispatch(UpdatingUserThunk(patch));
      props.save(false);
    } else {
      props.save(false);
    }
  };

  return (
    <div>
      <div className={style.userInfoView}>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handlerChange}
        />
        <input
          type="text"
          name="phone"
          value={userInfo.phone}
          onChange={handlerChange}
        />
        <input
          type="text"
          name="email"
          value={userInfo.email}
          onChange={handlerChange}
        />
        <input
          type="text"
          name="website"
          value={userInfo.website}
          onChange={handlerChange}
        />
      </div>
      <div className={style.button}>
        <button
          className={style.button}
          onClick={() => {
            updatingUser(userInfo);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
