import React, { FC } from "react";
import { Navigate, redirect, Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog";
import { RouteNames, routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      <Route />
      {routes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route
        path="*"
        element={<Navigate to={RouteNames.ADMIN_PANEL} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
