import Header from "./Header";
import CreateForm from "./CreateForm";
import Footer from "./Footer";
import Head from "next/head";
import ReportTable from "./ReportTable";
import { useState } from "react";

export default function Home() {
  const [report, setReport] = useState([]);

  const [counter, setCounter] = useState(0);

  function formHandle(event) {
    event.preventDefault();
    const addedLocation = {
      location: event.target.location.value,
      minCookie: event.target.min_number.value,
      maxCookie: event.target.max_number.value,
      avgCookie: event.target.avg.value,
    };

    setReport([...report, addedLocation]);
    counterHandle();
  }

  function counterHandle() {
    counter++;
    setCounter(counter);
  }
  return (
    <div className="bg-[#E8EFFF] h-screen">
      <Head>
        <title>Cookie Admin Stand</title>
      </Head>
      <Header />
      <CreateForm formHandle={formHandle} report={report} />
      {report.length ? (
        <ReportTable report={report} />
      ) : (
        <h1 className="my-14 font-bold font-xl">No Cookie Stand Created</h1>
      )}

      <Footer counter={counter} />
    </div>
  );
}
