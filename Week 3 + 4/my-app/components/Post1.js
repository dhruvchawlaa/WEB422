import { useState, useEffect } from "react";

export default function Post1() {

  const [post, setPost] = useState();

  useEffect(() => {
    // console.log("Post1 (before fetching): ", post);  // this won't work - returns undefined
    fetch(`https://jsonplaceholder.typicode.com/posts/1`).then(res => res.json()).then(data => {
      setPost(data);
    //   console.log("Post1 (fetched): ", post);        // this won't work - returns undefined
    })
  }, []);

  return (
    <>
      <p>Post (for debugging) : {JSON.stringify(post)}</p>
      <strong>User ID:</strong> {post?.userId}<br />
      <strong>Title:</strong> {post?.title}<br />
      <strong>Body:</strong> {post?.body}<br />
    </>
  )
}