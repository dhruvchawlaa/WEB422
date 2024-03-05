import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hello from "@/components/Hello";
import Clock from "@/components/Clock";
import Child from "@/components/Child";
import ClickCounter from "@/components/ClickCounter";
import Post1 from "@/components/Post1";
import Post2 from "@/components/Post2";
import Post3 from "@/components/Post3";

// This function gets called at build time
export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res=>res.json()).then(data=>{
      resolve({ props: { staticPost: data } })
    })
  })
}

export default function Home(props) {

  function handleMessage(msg) {
    console.log(`Child says: ${msg}`)
  }
  
  return (
    <>
      <h1>Home component (page)</h1>
      <p>Week 3 Example</p>

      <Hello />
      <Hello fName="Jason" lName="Perez" avatarUrl="https://reqres.in/img/faces/2-image.jpg"/>

      <hr />

      <h2>The Clock Component</h2>
      <p>Week 3 - Component: Adding &ldquo;state&rdquo; and Using Hooks - useState, useEffect</p>
      <Clock locale="en-CA" />

      <hr />

      <h2>Child Component</h2>
      <p>Week 3 - Component: Passing message (data) back to parent component</p>
      <Child sendMessage={handleMessage}/>

      <hr />

      <h2>Click Counter</h2>
      <p>Week 4 - Handling Events</p>
      
      <ClickCounter />

      <hr />

      <h2>Post1 Component</h2>
      <Post1 />
      
      <hr />

      <h2>Post2 Component</h2>
      <Post2 />

      <hr />

      <h2>Post3 Component</h2>
      <Post3 post={props.staticPost} />
    </>
  );
}
