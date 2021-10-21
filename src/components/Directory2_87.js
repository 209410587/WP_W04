import React, { useEffect, useState } from 'react';
import './Directory_87.scss';
// import items from './menu-items-data';
import axios from 'axios';
import MenuItem_87 from './MenuItem_87';

const Directory2_87 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL =
        'https://heroku-crown-87.herokuapp.com/api_87/category_87';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_87/category_87', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  console.log('menuItems', menuItems);
  return (
    <div>
      <div className="directory-menu">
        {menuItems.map((item) => {
          const { id, name, remote_url, size } = item;
          return (
            <MenuItem_87
              key={id}
              name={name}
              remote_url={remote_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory2_87;
