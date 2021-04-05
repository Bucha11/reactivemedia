import React from "react";
import { UserListItem } from "../UserList/UserListItem/UserListItem";
import style from "./UserList.module.css";

export const UserList = (props) => {
  const renderItems = props.data.map((i) => {
    return (
      <UserListItem
        key={i.id}
        id={i.id}
        name={i.name}
        username={i.username}
        email={i.email}
        phone={i.phone}
      />
    );
  });
  return <div className={style.listItems}>{renderItems}</div>;
};
