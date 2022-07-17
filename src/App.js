import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css'
import { actionCreators } from './state'

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const { depositMoney, withdrayMoney } =
    bindActionCreators(actionCreators, dispatch)

  return (
    <div className='App'>
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>
        Deposit
      </button>
      <button onClick={() => withdrayMoney(1000)}>
        Withdraw
      </button>
    </div>
  )
}

export default App
