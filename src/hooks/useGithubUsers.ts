import { useState, useEffect } from 'react';
import axios from 'axios';
import { User, UserSearchResult } from '../types/github';

/**
 * Search GitHub users based on a query.
 * @param query - The search query.
 * @returns users, loading & error message
 */
const useGitHubSearch = (query: string): UserSearchResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const searchUsers = async () => {
      try {
        const { data } = await axios.get(
          'https://api.github.com/search/users',
          { params: { q: query, per_page: 5 } }
        );
        setUsers(data.items);
        setError(null);
      } catch (error) {
        setUsers([]);
        let message = 'Error fetching users. Please try again.';
        if (error instanceof Error) {
          message = error.message;
        }
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    /**
     * Delay the search
     */
    const delaySearchUsers = () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        searchUsers();
      }, 300);
    };

    setLoading(true);

    if (query) {
      delaySearchUsers();
    } else {
      setUsers([]);
      setError(null);
      setLoading(false);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [query]);

  return { users, error, loading };
};

export default useGitHubSearch;
