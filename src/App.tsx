import React from "react";
import Header from "./ui/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./router/Router";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;
