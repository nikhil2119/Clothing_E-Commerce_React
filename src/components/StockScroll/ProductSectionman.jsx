import React, { useState, useRef } from 'react';
import card13 from '../Images/card13.avif';
import card2 from '../Images/card2.png';
import card3 from '../Images/card3.png';
import card14 from '../Images/card14.avif';
import card5 from '../Images/card5.png';
import card6 from '../Images/card6.png';
import card7 from '../Images/card7.png';
import card8 from '../Images/card8.png';
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

function ProductSectionman() {
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
          imageSrc={card13}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹799"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card2}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹849"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card3}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹999"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card14}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹849"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card5}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card6}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card7}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card8}
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

export default ProductSectionman;
