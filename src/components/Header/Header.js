import React from "react";
import { useDispatch } from "react-redux";
import { Input, Row, Col } from "antd";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/Icon/Logo_ML.png";
import { product } from "../../services/Product/ProductActions";

const { Search } = Input;

export const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const onSearch = (value) => {
    if (value !== "") {
      dispatch(product.getProductSearch(value));
      history.replace(`/items?search=${value}`);
    }
  };
  return (
    <nav className="nav-bar">
      <Row gutter={[16, 24]} className="header-search">
        <Col span={6} className="img-logo">
          <Link to={"/"}>
            <img alt="logo mercado libre" src={logo} className="logo" />
          </Link>
        </Col>
        <Col span={12}>
          <Search placeholder="Nunca dejes de buscar" onSearch={onSearch} />
        </Col>
      </Row>
    </nav>
  );
};
