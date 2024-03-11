import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import User from "@/components/User";

export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve,reject)=>{
    fetch('https://reqres.in/api/users/1').then(res=>res.json()).then(data=>{
      resolve({ props: { staticPost: data } })
    })
  })
}

export default function Home(props) {
  return (
    <>
      <h1>Home age (Component)</h1>
      <p>Week 4 – In-class Assignment by Chawla</p>
      <hr />
      <h2>User Component</h2>
      <User user={props.staticPost.data} />
    </>
  );
}
