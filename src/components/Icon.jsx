import React from 'react';

const Icon = ({ name, width, height }) => {
  return (
      <div className="icon">
      <h3>{name}</h3>
      <img src={`path/to/icons/${name}.svg`} alt={name} width={width} height={height} />
      {/* Assuming icons are in SVG format and stored in a directory */}
      {/* You can adjust the path as per your project structure */}
    </div>
  );
};

export default Icon;
