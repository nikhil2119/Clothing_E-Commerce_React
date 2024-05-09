import React, { useState, useRef } from 'react';
import acc1 from '../Images/acc1.avif';
import acc2 from '../Images/acc2.avif';
import acc3 from '../Images/acc3.avif';
import acc4 from '../Images/acc4.avif';
import acc5 from '../Images/acc5.avif';
import acc6 from '../Images/acc6.avif';
import acc7 from '../Images/acc7.avif';
import acc8 from '../Images/acc8.avif';
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

function ProductSectionAcc() {
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
          imageSrc={acc1}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹799"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={acc2}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹849"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={acc3}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹999"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={acc4}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹849"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={acc5}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={acc6}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={acc7}
          discount="50% off"
          brand="brand"
          shortDescription="a short line about the cloth.."
          price="₹200"
          actualPrice="$40"
        />
        <ProductCard
          imageSrc={acc8}
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

export default ProductSectionAcc;
