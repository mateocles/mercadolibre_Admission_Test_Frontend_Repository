/* eslint-disable indent */
import * as React from "react";
import { Input, Row, Col } from "antd";
import "./Header.css";
import logo from "../../assets/images/Icon/Logo_ML.png";

const { Search } = Input;

const onSearch = (value) => console.log(value);
export const Header = () => {
  return (
    <nav className="navBar">
      <Row gutter={[16, 24]} className="headerSearch">
        <Col span={6} className="imgLogo">
          <img alt="logo mercado libre" src={logo} height={30} />
        </Col>
        <Col span={12}>
          <Search placeholder="Nunca dejes de buscar" onSearch={onSearch} />
        </Col>
      </Row>
    </nav>
  );
};
