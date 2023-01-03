import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";

export const Layout = () => {
  return (
    <div className={s.layout}>
      <AppBar />
      <div className={s.place}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
