import { createContext, useEffect, useState } from 'react';
import { AppContextType } from './types/app';
import useGitHubSearch from './hooks/useGithubUsers';
import useGitHubRepositories from './hooks/useGithubRepositories';

export const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState<string>('');
  const [active, setActive] = useState<string>('');

  const { users, loading: loadingUsers } = useGitHubSearch(query);
  const { repositories, loading: loadingRepositories } =
    useGitHubRepositories(active);

  const onSelectUser = (username: string) =>
    setActive(username === active ? '' : username);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActive('');
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        users,
        loadingUsers,
        active,
        onSelectUser,
        loadingRepositories,
        repositories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
