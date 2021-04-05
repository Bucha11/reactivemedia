import React from "react";
import style from "./UserCardView.module.css";
export const UserCardView = (props) => {
  if (props.renderData) {
    return (
      <div>
        <div className={style.userInfoView}>
          <div>{props.renderData.name}</div>
          <div> {props.renderData.phone}</div>
          <div> {props.renderData.email}</div>
          <div> {props.renderData.website}</div>
        </div>
        <div className={style.button}>
          <button
            onClick={() => {
              props.edit(true);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
