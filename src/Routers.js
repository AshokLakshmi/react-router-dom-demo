import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import About from "./components/About";
import PageNotFount from "./components/PageNotFount";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users/:id" element={<SingleUser />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFount />} />
    </Routes>
  );
}

export default Routers;
