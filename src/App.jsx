import { useState } from 'react'
import './App.css'
import InputBox from './components/inputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [ amount, setAmount] = useState(0)
  const [ from, setFrom] = useState('usd')
  const [ to,setTo ] = useState('inr')
  const [ convertAmount, setConvertAmount ] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }

  const convert = ()=>{
    setConvertAmount(amount*currencyInfo[to])
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r px-4">
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Currency Converter 💱
      </h1>
  
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="space-y-6"
      >
        {/* From Input */}
        <div>
          <InputBox
            label="From"
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            amountChange={(amount) => setAmount(amount)}
          />
        </div>
  
        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={swap}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-black font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            🔄 Swap
          </button>
        </div>
  
        {/* To Input */}
        <div>
          <InputBox
            label="To"
            currencyOptions={options}
            amount={convertAmount}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled
          />
        </div>
  
        {/* Convert Button */}
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-black font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
        >
          Convert 💰
        </button>
      </form>
    </div>
  </div>
  
  
  )
}

export default App
