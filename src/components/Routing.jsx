import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
export default Routing;
