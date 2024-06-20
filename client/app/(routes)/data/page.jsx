"use client"

import DataPage from "@/app/_components/DataPage";
import Navbar from "@/app/_components/Navbar";
import React, { useEffect, useState } from "react";

const page = () => {
  const [jsonData, setJsonData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080//api/home")
      .then((response) => response.json())
      .then((data) => setJsonData(data));
  }, []);

  return (
    <div>
      <Navbar />
      <DataPage data={jsonData} />
    </div>
  );
};

export default page;
