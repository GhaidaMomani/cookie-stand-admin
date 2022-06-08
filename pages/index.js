import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [report, setReport] = useState({});

  function formHandle(event) {
    event.preventDefault();
    const addedLocation = {
      location: event.target.location.value,
      minCookie: event.target.min_number.value,
      maxCookie: event.target.max_number.value,
      avgCookie: event.target.avg.value,
    };

    setReport(addedLocation);
  }
  return (
    <div className="bg-[#E8EFFF] h-screen">
      
      <Head>
        <title>Cookie Admin Stand</title>
      </Head>
      <Header />
      <Main formHandle={formHandle} />
      <h1 className="text-center text-white">Report table coming soon......</h1>
      <h1 className="text-center text-white">{JSON.stringify(report)}</h1>

      <Footer />
    </div>
  );
}