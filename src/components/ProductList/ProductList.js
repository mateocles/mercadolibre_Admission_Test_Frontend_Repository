import React, { useEffect } from "react";
import { Row, Col, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
import logo from "../../assets/images/pc.png";
import freeShipping from "../../assets/images/Icon/ic_shipping@2x.png.png.png";

import { product } from "../../services/Product/ProductActions";

//
export const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(product.getProduct());
  }, [dispatch]);
  const { products } = useSelector((state) => state.product);
  return (
    <div className="listContainer">
      <Row className="containerProduct">
        <Col span={18}>
          <Row>
            <Col>
              <img alt="Product Images" src={logo} className="imgProduct" />
            </Col>
            <Col span={14}>
              <Col className="price">
                <span className="spanPrice">
                  <span>$</span>
                  <span>3.349.900</span>
                  <img
                    alt="free shipping"
                    src={freeShipping}
                    className="imgFreeShipping"
                  />
                </span>
              </Col>
              <Col className="detail">
                <span>Apple ipod Touch 5g 16gb negro igual A nuevo</span>
                <br />
                <span>Completo Unico!</span>
              </Col>
            </Col>
            <Col></Col>
          </Row>
        </Col>
        <Col className="country">
          <span>Capital federal</span>
        </Col>
      </Row>
      <Divider className="dividerList" />
    </div>
  );
};
