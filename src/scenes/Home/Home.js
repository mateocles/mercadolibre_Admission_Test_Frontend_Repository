import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { ProductList } from "../../components/ProductList/ProductList";
import { product } from "../../services/Product/ProductActions";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  let query = useQuery();
  useEffect(() => {
    if (
      !products.loading.getProduct &&
      !products.error.getProduct &&
      !products.success.getProduct
    ) {
      if (query.get("search") !== null) {
        dispatch(product.getProductSearch(query.get("search")));
      } else {
        dispatch(product.getProductSearch("query"));
      }
    }
  }, [dispatch, products, query]);
  return <ProductList />;
};
