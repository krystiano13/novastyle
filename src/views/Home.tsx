import React from "react";
import { Collections } from "../components/Collections/Collections";
import { Bestsellers } from "../components/Bestsellers/Bestsellers";

const Home = () => {
  return (
    <>
      <Collections />
      <Bestsellers />
    </>
  );
};

export { Home };
