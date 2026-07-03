import Input from '@components/Input'
import Spinner from '@components/Spinner';

import '@styles/main.scss';
import { lazy, Suspense } from 'react';

const Pokemons = lazy(() => import('@components/Pokemons'));

function App() {
  return (
    <main>
      <Input />
      <Suspense fallback={<Spinner />}>
        <Pokemons />
      </Suspense>
    </main>
  )
}

export default App
