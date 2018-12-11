import React from 'react';

function Search({
  value,
  onChange,
  onSubmit,
  children
}) {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <input
      type="text"
      value={value}
      onChange={onChange}
      />
      <button type="submit">
        {children}
      </button>
    </form>
  );
}

export default Search;
