import React from 'react';
import boycollection from "../Images/FemaleAccessories.jpg";
import girlcollection from "../Images/manaccessories.webp";
import accessoriescollection from "../Images/accessories-collection.png";

function CollectionItem({ imgSrc, title }) {
    return (
        <a href="#" className="collection">
            <img src={imgSrc} alt="" />
            <p className="collection-title">{title}</p>
        </a>
    );
}

function CollectionContaineracc() {
    return (
        <section className="collection-container">
            <CollectionItem imgSrc={boycollection} title="women apparels" />
            <CollectionItem imgSrc={girlcollection} title="men apparels" />
            <CollectionItem imgSrc={accessoriescollection} title="accessories" />
        </section>
    );
}

export default CollectionContaineracc;
