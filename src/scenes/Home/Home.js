import * as React from "react";
import { Breadcrumb, Layout } from "antd";
import { Header } from "../../components/Header/Header";
import { ProductList } from "../../components/ProductList/ProductList";
import "antd/dist/antd.css";
import "./Home.css";

const { Content } = Layout;
export const Home = () => {
  return (
    <div className="container">
      <Header />
      <Content className="content">
        <Breadcrumb className="breadCrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <ProductList />
      </Content>
    </div>
  );
};
