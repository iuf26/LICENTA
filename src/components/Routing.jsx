import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "components/Pages/SignIn.jsx";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<SignIn />} />
      </Routes>
    </>
  );
};
export default Routing;
