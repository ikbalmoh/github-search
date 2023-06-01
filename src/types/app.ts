import { Repository, User } from './github';

export interface AppContextType {
  query: string;
  setQuery: (query: string) => void;
  users: User[];
  loadingUsers: boolean;
  active: string;
  onSelectUser: (username: string) => void;
  repositories: Repository[];
  loadingRepositories: boolean;
}
