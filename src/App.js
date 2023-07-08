import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ChooseCategory from "./components/ChooseCategory/ChooseCategory";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ChooseCategory />
    </>
  );
}

export default App;
