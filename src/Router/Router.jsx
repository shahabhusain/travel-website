import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Abut from "../Pages/Abut";
import Packages from "../Pages/Packages";
import PackagesSingle from "../Pages/PackagesSingle";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<Abut />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/package-single/:packageId" element={<PackagesSingle />} />
      </Route>
    </>
  )
);
