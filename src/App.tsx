import { useState } from 'react';
import {
  Container,
  Header,
  HeaderText,
  Body,
} from './App.styles';

import { Item } from './types/Item';
import { items } from './data/items';
import { Category } from './types/Category';
import { categories } from './data/categories';

const App = () => {
  const [list, setList] = useState<Item[]>(items);

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>        
      </Header>
      <Body>
        {/* Area de Informacoes */}

        {/* Area de Insercao */}

        {/* Area de Itens */}

      </Body>
    </Container>
  );
}

export default App;