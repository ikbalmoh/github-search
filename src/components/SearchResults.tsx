import { useState } from 'react';
import useGitHubSearch from '../hooks/useGithubUsers';
import classNames from '../utils/classNames';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import LoadingSkeleton from './LoadingSkeleton';

type Props = {
  query: string;
};

export default function SearchResults({ query }: Props) {
  const { users, loading } = useGitHubSearch(query);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      className={classNames(
        'transition-all duration-1000 border-slate-200/60 bg-white',
        query.length
          ? 'flex flex-col opacity-100 translate-y-0 h-min border-t'
          : 'opacity-0 -translate-y-5 h-0'
      )}
    >
      <div className="text-slate-500 text-sm px-5 pt-5 pb-3">
        {loading ? 'Searching users' : 'Showing users for'} "
        <span className="font-semibold">{query}</span>"
      </div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        users.map((user, idx) => (
          <div
            key={idx}
            className={classNames(
              'bg-white border-slate-100/50 shadow-slate-200/60 overflow-hidden transition-all rounded-lg z-30 max-h-screen',
              selected === user.login
                ? 'scale-105 shadow-lg border sticky top-10'
                : 'border-none'
            )}
          >
            <button
              type="button"
              tabIndex={0}
              className={classNames(
                'w-full px-5 py-3 bg-white outline-none flex items-center text-slate-700 hover:text-indigo-700 transition-all cursor-pointer rounded-lg',
                'hover:bg-slate-50'
              )}
              onClick={() =>
                setSelected(selected === user.login ? '' : user.login)
              }
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-8 h-8 rounded-full mr-5"
              />
              <span className="font-medium flex-1 text-left mr-4">
                {user.login}
              </span>
              {selected === user.login ? (
                <ChevronUpIcon className="w-4 h-4 text-slate-500" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 text-slate-500" />
              )}
            </button>
          </div>
        ))
      )}
      <div></div>
    </div>
  );
}
