import React from "react";
import { Row, Col, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import freeShipping from "../../assets/images/Icon/ic_shipping@2x.png.png.png";

export const ProductList = () => {
  const products = useSelector((state) => state.product);

  return (
    <div className="list-container">
      <Skeleton loading={products.loading.getProduct} className="container-product">
        {products.items?.slice(0, 4).map((item) => (
          <div key={item.id} className="container-product">
            <Link to={`items/${item.id}`}>
              <Row>
                <Col span={18}>
                  <Row>
                    <Col>
                      <img
                        alt="Product Images"
                        src={item.picture}
                        className="img-product"
                      />
                    </Col>
                    <Col span={14}>
                      <Col className="price">
                        <span className="span-price">
                          <span className="simbol">$</span>
                          <span>{item.price.amount}</span>
                          {item.free_shipping ? (
                            <img
                              alt="free shipping"
                              src={freeShipping}
                              className="img-free-shipping"
                            />
                          ) : (
                            ""
                          )}
                        </span>
                      </Col>
                      <Col className="detail">
                        <span>{item.title}</span>
                        <br />
                        <span>{item.condition}</span>
                      </Col>
                    </Col>
                    <Col></Col>
                  </Row>
                </Col>
                <Col className="country">
                  <span>{item.address}</span>
                </Col>
              </Row>
            </Link>
          </div>
        ))}
      </Skeleton>
    </div>
  );
};
