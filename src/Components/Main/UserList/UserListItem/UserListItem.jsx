import React from "react";
import { NavLink } from "react-router-dom";
import style from "./UserListItem.module.css";

export const UserListItem = (props) => {
  return (
    <NavLink to={`/user/${props.id}`}>
      <div className={style.userCard}>
        <div className={style.userName}>{props.name}</div>
        <div className={style.userPhone}>{props.phone}</div>
      </div>
    </NavLink>
  );
};
