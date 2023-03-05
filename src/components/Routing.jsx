import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Login } from "./Pages/Login";
import { ResetPassword } from "./Pages/ResetPassword";
import { EmailCheck } from "./Pages/ResetPassword/EmailCheck";
import { PasswordForm } from "./Pages/ResetPassword/PasswordForm";
import { Signup } from "./Pages/Signup";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/account/login" />} />
        <Route exact path="/account/login" element={<Login />} />
        <Route exact path="/account/signup" element={<Signup />} />
        <Route exact path="/account/reset/password" element={<EmailCheck />} />
        <Route exact path="/account/reset/password/:email/:otp" element={<PasswordForm />} />
      </Routes>
    </>
  );
};
export default Routing;
