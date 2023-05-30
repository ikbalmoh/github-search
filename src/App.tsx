import { useState } from 'react';
import classNames from './utils/classNames';
import SearchInput from './components/SearchInput';
import useGitHubSearch from './hooks/useGithubUsers';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import LoadingSkeleton from './components/LoadingSkeleton';

function App(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [selected, setSelected] = useState<string>('');

  const { users, loading } = useGitHubSearch(query);

  return (
    <div className="h-screen flex flex-col w-full items-center justify-center">
      <div
        className={classNames(
          'w-11/12 md:w-full max-w-sm mx-auto items-center justify-center bg-white rounded-xl transition-all shadow-indigo-200 shadow-xl'
        )}
      >
        <SearchInput onSubmit={setQuery} />
        {query.length > 0 && (
          <div className="text-slate-500 text-sm px-5 py-3 border-b border-slate-200/60">
            {loading ? 'Searching users' : 'Showing users for'} "
            <span className="font-semibold">{query}</span>"
          </div>
        )}
        {loading && <LoadingSkeleton />}
        {!loading &&
          users.map((user, idx) => (
            <div
              key={idx}
              className={classNames(
                'transition-all overflow-auto flex flex-col items-center justify-center border-slate-200/60',
                selected === user.login
                  ? 'fixed inset-x-0 inset-y-0 shadow-lg border rounded-none z-30 bg-black/25 p-3 md:p-0'
                  : 'border-none rounded-lg'
              )}
              onClick={() =>
                setSelected(selected === user.login ? '' : user.login)
              }
            >
              <button
                type="button"
                tabIndex={0}
                className={classNames(
                  'w-full px-5 py-3 bg-white outline-none flex items-center text-slate-700 hover:text-indigo-700 transition-all cursor-pointer max-w-2xl',
                  'hover:bg-slate-50',
                  selected === user.login ? 'rounded-t-lg' : 'rounded-lg'
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
              {selected === user.login && (
                <div className="overflow-auto p-5 bg-white w-full rounded-b-lg max-w-2xl">
                  <div className="w-full"></div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
