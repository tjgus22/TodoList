import React from 'react';
import { CiTrash } from 'react-icons/ci';

export default function Todo({ todo, onUpdate, onDelete }) {
  return (
    <li>
      <input type='checkbox' id='checkbox' />
      <label htmlFor='checkbox'>{todo.text}</label>
      <button>
        <CiTrash />
      </button>
    </li>
  );
}
