import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import SharedLayout from "./components/SharedLayout";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const FruitsPage = React.lazy(() => import("./pages/FruitsPage"));
const Fruit = React.lazy(() => import("./components/Fruit"));
const ServicePage = React.lazy(() => import("./pages/ServicePage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="/fruits" index element={<FruitsPage />} />
            <Route path="/services" index element={<ServicePage />} />
            <Route path="/contact" index element={<ContactPage />} />
            <Route path="/login" index element={<LoginPage />} />
            <Route path="/register" index element={<RegisterPage />} />
            <Route path="/fruit/:id" element={<Fruit />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/fruit/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
