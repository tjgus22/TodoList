import React from 'react';

export default function Header({filters, filter, onFilterChange}) {
  return<header>{filters.map((value, index) => <li key={index}><button onClick={()=> onFilterChange(value)}>{value}</button></button></li></header>;
}
