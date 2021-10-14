import React, { useState } from 'react';
import './Overview_87.scss';
import jackets from './shop-jackets-data';
import sneakers from './shop-sneakers-data';
import Preview_87 from './Preview_87';

const Overview_87 = () => {
  const [jacketsItems, setJacketsItems] = useState(jackets);
  console.log('jacketsItems', jacketsItems);
  const [sneakersItems, setSneakersItems] = useState(sneakers);
  console.log('sneakersItems', sneakersItems);
  return (
    <div>
      <div className="collection-overview">
        <div className="collection-preview">
          <h2 className="title">SNEAKERS</h2>
          <div className="preview">
            {sneakersItems.map((sneakers) => {
              const { id, name, remoteUrl, price } = sneakers;

              return (
                <Preview_87
                  key={id}
                  name={name}
                  remoteUrl={remoteUrl}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="collection-overview">
        <div className="collection-preview">
          <h2 className="title">JACKETS</h2>
          <div className="preview">
            {jacketsItems.map((jackets) => {
              const { id, name, remoteUrl, price } = jackets;

              return (
                <Preview_87
                  key={id}
                  name={name}
                  remoteUrl={remoteUrl}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview_87;
