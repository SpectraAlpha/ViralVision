import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-xl font-bold">Viral Vision Media</span>
    </Link>
  );
}