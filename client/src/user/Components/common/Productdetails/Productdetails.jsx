import { useState } from "react";
import "./Productdetails.css";
import StarRatings from "react-star-ratings";
import { productdata } from "../../../../Data/Data";
import { FaFacebook, FaWhatsapp, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Productdetails = () => {
  const [img, setimg] = useState();
  return (
    <>
      {productdata.map((key) => (
        <div class="card-wrapper">
          <div class="cards">
            <div class="product-imgs">
              <div class="img-display">
                <div class="img-showcase">
                  <img
                    src={img}
                    alt="watch-img"
                    height={"500px"}
                    width={"500px"}
                  />
                </div>
              </div>
              <div class="img-select">
                <div class="img-item">
                  <img
                    src={key.img1}
                    alt="shoe image"
                    onMouseEnter={() => {
                      setimg(key.img1);
                    }}
                    onLoad={() => {
                      setimg(key.img1);
                    }}
                  />
                </div>
                <div class="img-item">
                  <img
                    src={key.img2}
                    alt="shoe image"
                    onMouseEnter={() => {
                      setimg(key.img2);
                    }}
                  />
                </div>
                <div class="img-item">
                  <img
                    src={key.img3}
                    alt="shoe image"
                    onMouseEnter={() => {
                      setimg(key.img3);
                    }}
                  />
                </div>
                <div class="img-item">
                  <img
                    src={key.img4}
                    alt="shoe image"
                    onMouseEnter={() => {
                      setimg(key.img4);
                    }}
                  />
                </div>
              </div>
            </div>

            <div class="product-content">
              <h2 class="product-title">{key.brandname}</h2>
              <h2>{key.productid}</h2>
              <h2>{key.watchname}</h2>
              <div class="product-rating">
                <StarRatings
                  rating={5}
                  starDimension="20px"
                  starSpacing="5px"
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                />
                {/* <span>{key.productrating}</span> */}
              </div>

              <div class="product-price">
                <p class="last-price">
                  Old Price: <span>{key.oldprice}</span>
                </p>
                <p class="new-price">
                  New Price:{" "}
                  <span>
                    {key.newprice} ({key.discount}%)
                  </span>
                </p>
              </div>

              <div class="product-detail">
                <h2>Description </h2>
                <p>{key.description}</p>

                <ul>
                  <li>
                    Color: <span>{key.color}</span>
                  </li>
                  <li>
                    Available: <span>{key.availablity}</span>
                  </li>
                  <li>
                    Gender: <span>{key.gender}</span>
                  </li>
                  <li>
                    Shipping Area: <span>{key.shippingarea}</span>
                  </li>
                  <li>
                    Shipping Fee: <span>{key.shippingfees}</span>
                  </li>
                  <li>
                    Warranty: <span>{key.warranty}</span>
                  </li>
                  <li>
                    Country of origin: <span>{key.countryoforigin}</span>
                  </li>
                </ul>
              </div>

              <div class="purchase-info">
                <button type="button" class="btn addtocart">
                  Add to Cart
                </button>
                <button type="button" class="btn addtowishlist">
                  Add to Wishlist
                </button>
              </div>

              <div class="social-links">
                <p>Share At: </p>
                <FaFacebook className="product-detail-social-icon" />
                <FaXTwitter className="product-detail-social-icon" />
                <FaWhatsapp className="product-detail-social-icon" />
                <FaInstagramSquare className="product-detail-social-icon" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Productdetails;
