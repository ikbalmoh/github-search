import { Repository, User } from '../../types/github';
import classNames from '../../utils/classNames';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import UserRepositories from './UserRepositories';

type Props = {
  user: User;
  open: boolean;
  onSelect: (username: string) => void;
  loadingRepositories: boolean;
  repositories: Repository[];
};

export default function GithubUser({
  user,
  open,
  onSelect,
  loadingRepositories,
  repositories,
}: Props) {
  return (
    <section
      className={classNames(
        'rounded-lg transition-all duration-500 bg-white z-30 scroll-m-12 scroll-smooth',
        open ? 'scale-105 shadow-lg' : ''
      )}
    >
      <button
        type="button"
        className={classNames(
          'w-full px-5 py-3 outline-none flex items-center text-slate-700 hover:text-indigo-700 focus:text-indigo-700 transition-all cursor-pointer max-w-2xl hover:bg-slate-50 focus:bg-slate-50 rounded-lg',
          open ? 'bg-slate-50 rounded-b-none' : ''
        )}
        onClick={() => onSelect(user.login)}
      >
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-8 h-8 rounded-full mr-5"
        />
        <span className="font-medium flex-1 text-left mr-4">{user.login}</span>
        {open ? (
          <ChevronUpIcon className="w-4 h-4 text-slate-500" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 text-slate-500" />
        )}
      </button>
      {open && (
        <div className="w-full bg-white rounded-b-lg">
          <UserRepositories
            loading={loadingRepositories}
            repositories={repositories}
          />
        </div>
      )}
    </section>
  );
}
