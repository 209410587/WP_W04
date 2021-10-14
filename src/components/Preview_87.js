import React from 'react';
import './Preview_87.scss';

const Preview_87 = ({ name, remoteUrl, price }) => {
  return (
    <div className="collection-item">
      <img className="image" src={remoteUrl} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button className="custom-button">Add to Cart</button>
    </div>
  );
};
export default Preview_87;
