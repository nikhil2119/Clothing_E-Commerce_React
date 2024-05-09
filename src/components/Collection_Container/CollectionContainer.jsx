import React from 'react';
import womancollection from "../Images/women-collection.png";
import mancollection from "../Images/men-collection.png";
import accessoriescollection from "../Images/accessories-collection.png";

function CollectionItem({ imgSrc, title }) {
    return (
        <a href="#" className="collection">
            <img src={imgSrc} alt="" />
            <p className="collection-title">{title}</p>
        </a>
    );
}

function CollectionContainer() {
    return (
        <section className="collection-container">
            <CollectionItem imgSrc={womancollection} title="women apparels" />
            <CollectionItem imgSrc={mancollection} title="men apparels" />
            <CollectionItem imgSrc={accessoriescollection} title="accessories" />
        </section>
    );
}



export default CollectionContainer;
