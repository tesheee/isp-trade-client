import React from "react";
import { IPost } from "../pages";
import ContentLoader from "react-content-loader";
import ProductSkeleton from "./ProductSkeleton";

interface IProductCardProps {
  product: IPost;
}

const ProductCard: React.FC<IProductCardProps> = ({ product}) => {
  return (
      <>
                  <div className='product-card'>
                      <img src={product.images[0]}></img>
                      <div className='product-card-details'>
                          <p style={{ fontSize: "18px" }}>{product.name}</p>
                          <div style={{ display: "flex", alignSelf: "center" }}>
                              <span
                                  className='sizes'
                                  style={{
                                      listStyle: "none",
                                      display: "flex",
                                      gap: "10px",
                                      marginLeft: "5px",
                                  }}>
                                    {product.description}
                              </span>
                          </div>
                          <p style={{ fontSize: "13px", opacity: "0.5" }}>{product.user.name}</p>
                      </div>
                  </div>
      </>

  );
};

export default ProductCard;
