import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";
// const posts = [
//   {
//     id: "123",
//     username: "dixxvv",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://firebasestorage.googleapis.com/v0/b/instagram-clone-fb953.appspot.com/o/images%2FIMG_7148.JPG?alt=media&token=42596bde-a209-494a-8d21-c899ed8891c5",
//     caption: "this is dope, subscribe now!",
//   },
//   {
//     id: "124",
//     username: "ssssangha",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://links.papareact.com/3ke",
//     caption: "this is dope, subscribe now!",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
