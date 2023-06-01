import React, { useContext } from 'react';
import { AppContext } from '../context';
import { AppContextType } from '../types/app';
import classNames from '../utils/classNames';

export default function QueryStatus() {
  const { loadingUsers, query } = useContext(AppContext) as AppContextType;

  return (
    <div
      className={classNames(
        'text-slate-500 text-sm px-5 py-3 border-b border-slate-200/60 intro-y',
        query.length ? 'block' : 'hidden'
      )}
    >
      {loadingUsers ? 'Searching users' : 'Showing users for'} "
      <span className="font-semibold">{query}</span>"
    </div>
  );
}
