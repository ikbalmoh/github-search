import React from 'react';

export default function Header() {
  return (
    <div className="mt-32 mb-20 flex flex-col md:flex-row items-center justify-center intro-y">
      <img
        src={process.env.PUBLIC_URL + '/github-purple.png'}
        alt="logo"
        className="w-24 h-24 mr-0 md:mr-5"
      />
      <div className="mt-5 md:mt-0 text-3xl font-medium text-indigo-500">
        Github Search
      </div>
    </div>
  );
}
