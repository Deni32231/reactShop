import React from "react";
import AdminPanel from "../pages/AdminPanel";
import Basket from "../pages/Basket";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  ADMIN_PANEL = "/shopBuild/admin",
  BASKET = "/shopBuild/basket",
  CATALOG = "/shopBuild/catalog",
  PRODUCT_ID = "/shopBuild/product/:id",
}

export const routes: IRoute[] = [
  { path: RouteNames.ADMIN_PANEL, element: AdminPanel },
  { path: RouteNames.BASKET, element: Basket },
  { path: RouteNames.CATALOG, element: Catalog },
  { path: RouteNames.PRODUCT_ID, element: Product },
];
