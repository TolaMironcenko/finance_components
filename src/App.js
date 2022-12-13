import './css/App.css';
import Balance from './components/Balance';
import Transaction from './components/Transaction';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {

  const transactions = [
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"}, 
    {'sum': -100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 19800, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': -1340, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"},
    {'sum': 100, 'category': 'mom', 'time': "19.06.2002 17:22"}
  ]

  return (
    <div className="App">
      <Balance balance={1000}/>
      <Input/>
      <Button>button</Button>
      <div className={'transactions'}>
      {
        transactions.map((transaction, id) => {
          return(
            <Transaction
              sum={transaction.sum}
              category={transaction.category}
              time={transaction.time}
            />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
