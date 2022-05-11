import React from "react";

const ProductComponent = () => {
  return(
    <div class="single-product">
      <div class="product-f-image">
        <img src={require("../images/product-1.jpg")} alt="" />
        <div class="product-hover">
          <a href="#" class="add-to-cart-link">
            <i class="fa fa-shopping-cart"></i> Add to cart
          </a>
          <a href="single-product.html" class="view-details-link">
            <i class="fa fa-link"></i> See details
          </a>
        </div>
      </div>

      <h2>
        <a href="single-product.html">Samsung Galaxy s5- 2015</a>
      </h2>

      <div class="product-carousel-price">
        <ins>$700.00</ins> <del>$100.00</del>
      </div>
    </div>
  )
}

export default ProductComponent;