import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostsThunk } from "../../../Redux/Reducer";
import { UserCardEdit } from "./UserCardEdit/UserCardEdit";
import { UserCardView } from "./UserCardView/UserCardView";
import style from "./UserCard.module.css";

export const UserCard = (props) => {
  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(getPostsThunk(id));
  }, []);
  const posts = useSelector((state) => state.posts);
  const renderData = props.data.filter((i) => i.id === Number(id))[0];
  const renderPosts = posts.length ? (
    posts[0].map((i) => (
      <div key={i.id} className={style.post}>
        <h3>{i.title}</h3>
        <p>{i.body}</p>
      </div>
    ))
  ) : (
    <div>loading</div>
  );

  return (
    <div>
      <div className={style.userInfo}>
        {!isEdited ? (
          <UserCardView renderData={renderData} edit={setIsEdited} />
        ) : (
          <UserCardEdit data={renderData} save={setIsEdited} />
        )}
      </div>
      <div>
        <h2>Posts</h2>
        {renderPosts}
      </div>
    </div>
  );
};
