import Layout from "@/components/layout";
import "@/styles/globals.css";
import { useEffect } from "react";

// add Bootstrap css : npm install bootstrap@5
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap"); // add bootstrap js library
  }, []);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
