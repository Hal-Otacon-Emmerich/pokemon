import Card from '@components/Card'
import Input from '@components/Input'
import Flex from '@components/Flex'
import PokemonShortInfo from './components/PokemonShortInfo'

import '@styles/main.scss';

function App() {
  return (
    <main>
      <Input />
      <Flex>
        <Card>
          <PokemonShortInfo 
            number="#001"
            name="Bulbasaur"
            tags={['Grass', 'Poison']}
          />
        </Card>
        <Card>
          <PokemonShortInfo 
            number="#001"
            name="Bulbasaur"
            tags={['Grass', 'Poison']}
          />
        </Card>
        <Card>
          <PokemonShortInfo 
            number="#001"
            name="Bulbasaur"
            tags={['Grass', 'Poison']}
          />
        </Card>
      </Flex>
    </main>
  )
}

export default App
