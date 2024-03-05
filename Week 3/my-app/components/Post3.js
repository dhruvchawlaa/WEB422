import { useState, useEffect } from "react";

export default function Post3(props) {  // props = {post : value}

  return (
    <>
      <strong>User ID:</strong> {props.post?.userId}<br />
      <strong>Title:</strong> {props.post?.title}<br />
      <strong>Body:</strong> {props.post?.body}<br />
    </>
  )
}