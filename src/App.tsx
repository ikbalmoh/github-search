import { useContext, useState } from 'react';
import classNames from './utils/classNames';
import SearchInput from './components/SearchInput';
import { AppContext } from './context';
import { AppContextType } from './types/app';
import SearchResult from './components/SearchResult';
import Header from './components/Header';
import Footer from './components/Footer';

function App(): JSX.Element {
  const [focus, setFocus] = useState<boolean>(false);

  const { users } = useContext(AppContext) as AppContextType;

  return (
    <>
      <main className="min-h-[60vh] mb-32">
        <Header />
        <div
          onMouseDown={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          className={classNames(
            'w-11/12 md:w-full mx-auto items-center justify-center bg-white rounded-xl transition-all shadow-indigo-200 my-10',
            focus || users.length > 0
              ? 'shadow-xl max-w-2xl'
              : 'shadow max-w-lg'
          )}
        >
          <SearchInput />
          <SearchResult />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
