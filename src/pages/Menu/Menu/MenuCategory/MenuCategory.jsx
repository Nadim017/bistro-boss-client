import React from 'react';
import MenuItem from '../../../shared/MenuItem/MenuItem';
import Cover from '../../../shared/Cover/Cover';

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="p-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
