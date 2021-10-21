import React, { useState } from 'react';
import Overview_87 from '../components/Overview_87';
// import items from '../components/menu-items-data';
import './Shop_87.scss';

const Shop_87 = () => {
  //   const [menuItems, setmenuItems] = useState(items);
  //   console.log('menuItems', menuItems);

  return (
    <div className="shop-page">
      <h2>Shop Two Page</h2>
      {/* {menuItems.map((item) => {
        const { id, name } = item;
        return <Overview_87 key={id} title={name} />;
      })}
      ; */}
      <Overview_87 />
    </div>
  );
};

export default Shop_87;
