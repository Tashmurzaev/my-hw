import './App.css';
import Expenses from './Components/Expenses';
import Count from './count/Count';

function App() {
  const expenses = [
    {
        id: 'e1',
        name: 'T-shirt',
        price: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        name: 'TV',
        price: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        name: 'Cardigan',
        price: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        name: 'Sneakers',
        price: 450,
        date: new Date(2021, 5, 12),
    },
];
  return (
    <div className="">
      <Count/>
      {
        expenses.map((element, index) => {
          return <Expenses
          name={element.name}
          price={element.price}
          date={element.date}
          />
        })
      }
    </div>
  );
}

export default App;
