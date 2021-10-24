import './App.css';
import Expenses from './Components/Expense/Expenses';
import Count from './count/Count';
import  Comment  from './Components/HW-36/Comment';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="">
      <Comment/>
      {/* {
        expenses.map((element, index) => {
          return <Expenses
          title={element.title}
          amount={element.amount}
          date={element.date}
          />
        })
      } */}
    </div>
  );
}

export default App;
