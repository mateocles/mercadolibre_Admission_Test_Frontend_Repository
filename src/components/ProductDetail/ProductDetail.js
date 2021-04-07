import React, { useEffect } from "react";
import { Row, Col, Carousel, Button, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { product } from "../../services/ProductDetail/ProductDetailActions";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const productDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(product.getProductDetail(id));
  }, [dispatch, id]);
  return (
    <div className="list-container">
      {productDetail?.item && (
        <Row className="container-product">
          <Skeleton loading={productDetail.loading.getProductDetail}>
            <Col span={17} className="col-carousel">
              <Carousel autoplay>
                {productDetail.item?.pictures?.map((item) => (
                  <div key={item.id}>
                    <img
                      alt="Product Images"
                      src={item.url}
                      className="img-detail-product"
                    />
                  </div>
                ))}
              </Carousel>
            </Col>
            <Col span={6} className="col-detail-product">
              <Col className="condition-product">
                <span>{productDetail.item.condition}</span>
                <span> - </span>
                <span>{productDetail.item.sold_quantity} vendidos</span>
              </Col>
              <Col className="col-title-product">
                <span className="title-product">
                  {productDetail.item.title}
                </span>
              </Col>
              <Col className="col-title-product">
                <span className="price-product">
                  <span>$ </span>
                  <span>{productDetail.item.price}</span>
                </span>
              </Col>
              <Col className="col-title-product">
                <Button type="primary" className="btn">
                  Comprar
                </Button>
              </Col>
            </Col>
            <Col className="col-description">
              <h2 className="description-product">Descripción del producto</h2>
              <p className="pdp-description">
                {productDetail.item?.description}
              </p>
            </Col>
          </Skeleton>
        </Row>
      )}
    </div>
  );
};

export default ProductDetail;
