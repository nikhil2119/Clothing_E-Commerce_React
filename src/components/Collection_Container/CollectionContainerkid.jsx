import React from 'react';
import boycollection from "../Images/boy.png";
import girlcollection from "../Images/girl.png";
import accessoriescollection from "../Images/accessories-collection.png";

function CollectionItem({ imgSrc, title }) {
    return (
        <a href="#" className="collection">
            <img src={imgSrc} alt="" />
            <p className="collection-title">{title}</p>
        </a>
    );
}

function CollectionContainerkid() {
    return (
        <section className="collection-container">
            <CollectionItem imgSrc={boycollection} title="women apparels" />
            <CollectionItem imgSrc={girlcollection} title="men apparels" />
            <CollectionItem imgSrc={accessoriescollection} title="accessories" />
        </section>
    );
}

export default CollectionContainerkid;
