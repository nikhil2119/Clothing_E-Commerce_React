import React from 'react';
import mancollection from "../Images/man_sitting.avif";
import mantradition from "../Images/mantraditional.avif";
import accessoriescollection from "../Images/accessories-collection.png";

function CollectionItem({ imgSrc, title }) {
    return (
        <a href="#" className="collection">
            <img src={imgSrc} alt="" />
            <p className="collection-title">{title}</p>
        </a>
    );
}

function CollectionContainerman() {
    return (
        <section className="collection-container">
            <CollectionItem imgSrc={mancollection} title="women apparels" />
            <CollectionItem imgSrc={mantradition} title="men apparels" />
            <CollectionItem imgSrc={accessoriescollection} title="accessories" />
        </section>
    );
}



export default CollectionContainerman;