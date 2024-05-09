import React, { useState, useRef } from 'react';
import card1 from'../Images/card1.png';
import card4 from'../Images/card4.png';
import card19 from'../Images/card19.avif';
import card12 from'../Images/card12.png';
import card15 from'../Images/card15.avif';
import card16 from'../Images/card16.avif';
import card17 from'../Images/card17.avif';
import card18 from'../Images/card18.avif';
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

function ProductSectionwoman() {
  const productContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
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
          imageSrc={card1}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹799"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card4}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹849"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card17}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹999"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card18}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹849"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card19}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card12}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card15}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={card16}
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

export default ProductSectionwoman;
