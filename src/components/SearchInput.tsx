import { FormEvent, useState } from 'react';
import Button from './form/Button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type Props = {
  onSubmit: (value: string) => void;
};

export default function SearchInput({ onSubmit }: Props) {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-5 flex items-center">
      <MagnifyingGlassIcon className="w-5 h-5 mr-3 text-slate-400" />
      <input
        className="flex-1 focus:outline-none"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter username"
      />
      <Button>Search</Button>
    </form>
  );
}
