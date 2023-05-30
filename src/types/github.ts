export interface User {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface UserSearchResult {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface Repository {
  id: number;
  name: string;
}

export interface UserRepositories {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
}
