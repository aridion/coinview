import Navbar from "./Navbar";
import Head from "next/head";
// import Fetch from "isomorphic-unfetch";
// import Index from "../pages";

const Layout = (props) => (
  <div id="layout-parent">
    <Head>
      <title>Coinview</title>
    </Head>
    <Navbar />
    <main>{props.children}</main>
  </div>
);

export default Layout;
