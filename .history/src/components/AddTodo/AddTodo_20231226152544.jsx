import React from 'react';

export default function AddTodo({ onAdd }) {
  return (
    <form>
      <input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
    </form>
  );
}
