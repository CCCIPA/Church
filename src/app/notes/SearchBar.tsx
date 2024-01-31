// SearchBar.tsx
"use client"
import React from "react";

interface SearchBarProps {
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default SearchBar;
