import * as React from "react";
import { Header } from "../../components/Header/Header";
import { ProductList } from "../../components/ProductList/ProductList";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <ProductList />
    </div>
  );
};
