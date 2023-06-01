import React from 'react';

export default function Footer() {
  return (
    <div className="p-5 text-center text-slate-500 flex flex-col">
      <a
        className="text-sm hover:text-indigo-600 font-medium intro-y"
        href="https://github.com/iikmoh"
        target="_blank"
        rel="noreferrer"
      >
        @iikmoh
      </a>
      <a
        className="text-sm mt-1 hover:text-indigo-600 intro-y"
        href={'https://github.com/iikmoh/github-search'}
      >
        Source available on{' '}
        <span className="text-indigo-600 font-medium">Github</span>
      </a>
    </div>
  );
}
