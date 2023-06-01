import { useContext, useState } from 'react';
import classNames from './utils/classNames';
import SearchInput from './components/SearchInput';
import { AppContext } from './context';
import { AppContextType } from './types/app';
import SearchResult from './components/SearchResult';

function App(): JSX.Element {
  const [focus, setFocus] = useState<boolean>(false);

  const { users } = useContext(AppContext) as AppContextType;

  return (
    <div
      onMouseDown={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className={classNames(
        'w-11/12 md:w-full max-w-2xl mx-auto items-center justify-center bg-white rounded-xl transition-all shadow-indigo-200 mt-32 mb-10',
        focus || users.length > 0 ? 'shadow-xl' : 'shadow'
      )}
    >
      <SearchInput />
      <SearchResult />
    </div>
  );
}

export default App;
