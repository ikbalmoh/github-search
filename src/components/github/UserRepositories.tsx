import { Repository } from '../../types/github';
import { StarIcon } from '@heroicons/react/24/outline';
import LoadingRepositorySkeleton from './LoadingRepositorySkeleton';

type Props = {
  loading: boolean;
  repositories: Repository[];
};

export default function UserRepositories({ loading, repositories }: Props) {
  if (loading) {
    return <LoadingRepositorySkeleton />;
  }

  if (repositories.length < 1) {
    return (
      <div className="p-10 text-center text-slate-500 ">No repositories</div>
    );
  }

  return (
    <div className="flex flex-col bg-gradient-to-b from-slate-50 to-white rounded-b-lg py-3">
      {repositories.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="my-2 mx-4 p-3 bg-white border border-slate-200/60 hover:border-indigo-400 hover:shadow-md transition-all rounded-lg intro-y"
        >
          <div className="flex justify-between">
            <div className="font-semibold text-sm text-slate-700">
              {repo.full_name}
            </div>
            <div className="whitespace-nowrap flex items-center text-slate-500">
              <StarIcon className="w-3 h-3 mr-1" />{' '}
              <span className="text-xs">{repo.stargazers_count} star</span>
            </div>
          </div>
          <div className="mt-1 text-slate-600">{repo.description}</div>
        </a>
      ))}
    </div>
  );
}
