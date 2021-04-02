import * as React from "react";
import { Card, Row } from "antd";
import "./ProductList.css";
import "antd/dist/antd.css";

export const ProductList = () => {
  return (
    <Row className="site-card-border-less-wrapper">
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Row>
  );
};
