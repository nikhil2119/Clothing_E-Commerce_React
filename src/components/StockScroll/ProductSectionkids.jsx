import React, { useState, useRef } from 'react';
import kid1 from '../Images/kid1.avif';
import kid2 from '../Images/kid2.avif';
import kid3 from '../Images/kid3.avif';
import kid4 from '../Images/kid4.avif';
import kid5 from '../Images/kid5.avif';
import kid6 from '../Images/kid6.avif';
import kid7 from '../Images/kid7.avif';
import kid8 from '../Images/kid8.avif';
import arroww from '../Images/arrow.png';


function ProductCard({ imageSrc, discount, brand, shortDescription, price, actualPrice }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <span className="discount-tag">{discount}</span>
        <img src={imageSrc} className="product-thumb" alt="" />
        <button className="card-btn">Add to Cart</button>
      </div>
      <div className="product-info">
        <h2 className="product-brand">{brand}</h2>
        <p className="product-short-des">{shortDescription}</p>
        <span className="price">{price}</span><span className="actual-price">{actualPrice}</span>
      </div>
    </div>
  );
}

function ProductSectionkid() {
  const productContainerRef = useRef(null);
  const [scrollPosition,setScrollPosition] = useState(0);
  const containerWidth = productContainerRef.current ? productContainerRef.current.offsetWidth : 0;

  const handleNextClick = () => {
    console.log("Next button clicked");
    if (productContainerRef.current) {
      const scrollDistance = containerWidth + 20; // Assuming 20px margin between cards
      productContainerRef.current.scrollLeft += scrollDistance;
    }
  };
  
  const handlePrevClick = () => {
    console.log("Previous button clicked");
    if (productContainerRef.current) {
      const scrollDistance = containerWidth + 20; // Assuming 20px margin between cards
      productContainerRef.current.scrollLeft -= scrollDistance;
    }
  };
  

  const handleScroll = () => {
    if (productContainerRef.current) {
      setScrollPosition(productContainerRef.current.scrollLeft);
    }
  };

  return (
    <section className="product">
      <h2 className="product-category">best selling</h2>

      <button className="pre-btn" onClick={handlePrevClick}><img src={arroww} alt="Previous" /></button>
      <button className="nxt-btn" onClick={handleNextClick}><img src={arroww} alt="Next" /></button>

      <div className="product-container" ref={productContainerRef} onScroll={handleScroll}>
      <ProductCard
          imageSrc={kid1}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹799"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={kid2}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹849"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={kid3}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹999"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={kid4}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹849"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={kid5}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={kid6}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={kid7}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={kid8}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
      </div>
    </section>
  );
}

export default ProductSectionkid;
