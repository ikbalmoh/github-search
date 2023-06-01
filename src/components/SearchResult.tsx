import { useContext, useRef } from 'react';
import QueryStatus from './QueryStatus';
import { AppContext } from '../context';
import { AppContextType } from '../types/app';
import LoadingUserSkeleton from './github/LoadingUserSkeleton';
import GithubUser from './github/GithubUser';

export default function SearchResult() {
  const {
    loadingUsers,
    users,
    active,
    onSelectUser,
    loadingRepositories,
    repositories,
  } = useContext(AppContext) as AppContextType;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <QueryStatus />
      {loadingUsers ? (
        <LoadingUserSkeleton />
      ) : (
        <div ref={ref}>
          {users.map((user) => (
            <GithubUser
              user={user}
              key={user.id}
              open={active === user.login}
              onSelect={onSelectUser}
              loadingRepositories={loadingRepositories}
              repositories={repositories}
            />
          ))}
        </div>
      )}
    </>
  );
}
