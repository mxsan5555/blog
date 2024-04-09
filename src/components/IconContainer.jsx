import React, { useState, useEffect } from 'react';
import Icon from './Icon'; // Importing the child component
import iconList from './icon-list.json'; // Assuming icon-list.json is in the same directory

const IconContainer = () => {
  const [icons, setIcons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetching icons from icon-list.json
    setIcons(iconList);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtering icons based on search term
  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search icons..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="icon-list">
        {/* Mapping through all icons */}
        {icons.map((icon, index) => (
          <Icon key={index} name={icon.name} width={icon.width} height={icon.height} />
        ))}
      </div>
    </div>
  );
};

export default IconContainer;
