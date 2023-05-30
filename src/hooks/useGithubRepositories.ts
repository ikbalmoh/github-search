import { useState, useEffect } from 'react';
import axios from 'axios';
import { Repository, UserRepositories } from '../types/github';

/**
 * Get GitHub user repositories.
 * @param username - The search query.
 * @returns repositories, loading & error message
 */
const useGitHubRepositories = (username: string | null): UserRepositories => {
  const [loading, setLoading] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchUsers = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get<Repository[]>(
          `https://api.github.com/users/${username}/repos`
        );
        setRepositories(data);
        setError(null);
      } catch (error) {
        setRepositories([]);
        setError('Error fetching repositories. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    setRepositories([]);
    setError(null);

    if (username) {
      searchUsers();
    }
  }, [username]);

  return { repositories, error, loading };
};

export default useGitHubRepositories;
