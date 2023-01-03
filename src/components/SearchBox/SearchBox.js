import React from "react";

export const SearchBox = ({ value, onChangeFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="enter name..."
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
};
