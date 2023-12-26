import React from 'react';
import { CiTrash } from 'react-icons/ci';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  return (
    <li>
      <input
        type='checkbox'
        id='checkbox'
        checked={todo.status === 'completed'}
      />
      <label htmlFor='checkbox'>{todo.text}</label>
      <button>
        <CiTrash />
      </button>
    </li>
  );
}
