import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HelloWorld from "@/components/HelloWorld";
import Clock from "@/components/Clock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Home Page (component)</h1>
      <p>Week 3 In-class assignment by Dhruv Chawla</p>
      <hr />
      <HelloWorld course="WEB422" school="SDDS" />

      <Clock locale="en-CA" />
    </>
  );
}
