import React, { useEffect } from "react";
import { Row, Col, Carousel, Button } from "antd";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import logo from "../../assets/images/pc.png";

const ProductDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const letras =
    " Fotos amplias y perfectas de día y de noche <br> dfasdfasdfasdfasdfasdfasdfasd";
  useEffect(() => {
    console.log(id);
  }, [dispatch, id]);
  return (
    <div className="listContainer">
      <Row className="containerProduct">
        <Col span={17} className="col-carousel">
          <Carousel autoplay>
            <div>
              <img
                alt="Product Images"
                src={logo}
                className="img-detail-product"
              />
            </div>
            <div>
              <img
                alt="Product Images"
                src={logo}
                className="img-detail-product"
              />
            </div>
            <div>
              <img
                alt="Product Images"
                src={logo}
                className="img-detail-product"
              />
            </div>
            <div>
              <img
                alt="Product Images"
                src={logo}
                className="img-detail-product"
              />
            </div>
          </Carousel>
        </Col>
        <Col span={6} className="col-detail-product">
          <Col className="condition-product">
            <span>Nuevo</span>
            <span> - </span>
            <span>234 vendidos</span>
          </Col>
          <Col className="col-title-product">
            <span className="title-product">Deco reverse Sombrero Oxford</span>
          </Col>
          <Col className="col-title-product">
            <span className="price-product">
              <span>$ </span>
              <span>1900</span>
            </span>
          </Col>
          <Col className="col-title-product">
            <Button type="primary" className="btn">
              Comprar
            </Button>
          </Col>
        </Col>
        <Col>
          <h2 className="description-product">Descripción del producto</h2>
          <p>{letras}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
