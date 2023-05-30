import React, { type ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className="bg-indigo-500 hover:bg-indigo-600 font-medium text-white text-sm px-3 py-2 rounded-lg hover:shadow-md disabled:shadow-none transition-all disabled:bg-gray-200 disabled:text-gray-500 disabled:hover:bg-gray-300"
    >
      {props.children}
    </button>
  );
}
