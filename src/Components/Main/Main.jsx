import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { UserList } from "../Main/UserList/UserList";
import { UserCard } from "../Main/UserCard/UserCard";
import { AddUserForm } from "./AddUserForm/AddUserForm";
import style from "./Main.module.css";

export const Main = () => {
  const usersData = useSelector((state) => state.users);
  const lastId = usersData.length;

  return (
    <main className={style.main}>
      <Route exact path="/">
        <UserList data={usersData} />
      </Route>
      <Route path="/user/:id">
        <UserCard data={usersData} />
      </Route>
      <Route path="/login">
        <AddUserForm id={lastId} />
      </Route>
    </main>
  );
};
