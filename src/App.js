import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ChooseCategory from "./components/ChooseCategory/ChooseCategory";
import ListOfAuthors from "./components/ListOfAuthors/ListOfAuthors";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ChooseCategory />
      <ListOfAuthors />
    </>
  );
}

export default App;
