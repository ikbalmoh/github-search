import { useContext } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AppContext } from '../context';
import { AppContextType } from '../types/app';
import classNames from '../utils/classNames';

export default function SearchInput() {
  const { query, setQuery } = useContext(AppContext) as AppContextType;

  return (
    <div className="w-full p-5 flex items-center rounded-lg">
      <MagnifyingGlassIcon className="w-5 h-5 mr-3 text-slate-400" />
      <input
        className="flex-1 focus:outline-none"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter username"
      />
      <button
        className={classNames(
          'intro-x ml-3 hover:bg-red-50 focus:bg-red-50 outline-none rounded-full p-1 transition-colors text-slate-300 hover:text-red-400 focus:text-red-400',
          query ? 'block' : 'hidden'
        )}
        onClick={() => setQuery('')}
      >
        <XMarkIcon className="w-5 h-5 " />
      </button>
    </div>
  );
}
