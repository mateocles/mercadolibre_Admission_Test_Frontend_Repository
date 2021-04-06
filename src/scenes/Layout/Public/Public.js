import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Breadcrumb, Layout } from "antd";
import { Home } from "../../Home/Home";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import { Header } from "../../../components/Header/Header";
import "./public.scss";

const { Content } = Layout;

export const Public = ({ history }) => {
  const products = useSelector((state) => state.product);
  return (
    <div className="container">
      <Router history={history}>
        <Header />
        <Content className="content">
          <Breadcrumb className="breadCrumb">
            {products.categories?.map((item, index) => (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Switch className="h-100">
            <Route exact path="/" component={Home} />
            <Route exact path="/items/:id" component={ProductDetail} />
            <Route exact path="/items" component={Home} />
            <Router path="*">
              <div>404</div>
            </Router>
          </Switch>
        </Content>
      </Router>
    </div>
  );
};
