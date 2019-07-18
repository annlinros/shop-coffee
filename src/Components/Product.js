import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonElement } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export default class Product extends Component {

  render() {
    const {  img, title, price } = this.props.product;

    return (
      <ProductWrapper className="col-sm-6 col-md-4 col-lg-3 my-3">
        <div className="card">
          <div className="img-container">
            <Link to="/details">
              <img className="card-img-top" src={img} alt={title} />
            </Link>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="card-title">{title}</p>
            <p>${price}</p>
          </div>
          <ButtonElement className="d-flex justify-content-center-around">
            Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
          </ButtonElement>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: 0.5rem solid #fff;
    transition: all 0.2s linear;
  }
  .card-footer {
    border: none;
    background: transparent;
  }
  &:hover {
    .card {
      box-shadow: 0.2rem 0.2rem 0.5rem 0rem #a9a9a9;
    }
  }
`;
