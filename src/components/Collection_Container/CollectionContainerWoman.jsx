import React from 'react';
import womancollection from "../Images/women-collection.png";
import womantradition from "../Images/WomanSection.jpg";
import accessoriescollection from "../Images/accessories-collection.png";

function CollectionItem({ imgSrc, title }) {
    return (
        <a href="#" className="collection">
            <img src={imgSrc} alt="" />
            <p className="collection-title">{title}</p>
        </a>
    );
}

function CollectionContainerwoman() {
    return (
        <section className="collection-container">
            <CollectionItem imgSrc={womancollection} title="women apparels" />
            <CollectionItem imgSrc={womantradition} title="men apparels" />
            <CollectionItem imgSrc={accessoriescollection} title="accessories" />
        </section>
    );
}



export default CollectionContainerwoman;
