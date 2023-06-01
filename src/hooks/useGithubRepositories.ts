import { useState, useEffect } from 'react';
import axios from 'axios';
import { Repository, UserRepositories } from '../types/github';

/**
 * Get GitHub user repositories.
 * @param username - The search query.
 * @returns repositories, loading & error message
 */
const useGitHubRepositories = (username: string): UserRepositories => {
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<{
    [key: string]: Repository[];
  }>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  useEffect(() => {
    if (firstRender) {
      return;
    }
    const fetchRepositories = async (username: string) => {
      setLoading(true);
      try {
        const { data } = await axios.get<Repository[]>(
          `https://api.github.com/users/${username}/repos`
        );
        setRepositories({
          ...repositories,
          [username]: data,
        });
        setError(null);
      } catch (error) {
        setError('Error fetching repositories. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    setError(null);

    if (username && repositories[username] === undefined) {
      fetchRepositories(username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const userRepositories: Repository[] = username
    ? repositories[username] ?? []
    : [];

  return { repositories: userRepositories ?? [], error, loading };
};

export default useGitHubRepositories;
