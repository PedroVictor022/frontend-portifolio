import Head from "next/head";
import React from "react";
import { HeaderApp } from "../src/Header";

export default function HomeApp() {
  return (
    <React.Fragment>
     <Head>
        <title>Pedro Portifolio</title>
     </Head>
     <HeaderApp />
    </React.Fragment>
  )
}
