import { useState, useEffect } from 'react';
import {
  Container,
  Header,
  HeaderText,
  Body,
} from './App.styles';

import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

import { Item } from './types/Item';
import { items } from './data/items';
import { Category } from './types/Category';
import { categories } from './data/categories';

import { filterListByMonth, getCurrentMonth,  } from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState<Item[]>(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>        
      </Header>
      <Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem}/>

        <TableArea list={filteredList} />

      </Body>
    </Container>
  );
}

export default App;