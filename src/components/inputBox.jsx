import React, {useId} from "react";

function InputBox({
    label,
    amount,
    amountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency= "usd",
    amountDisabled = false,
    currencyDisable = false,
    className="",

}) {
    const id = useId()
    return (
        <div >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border rounded-xl bg-white w-full max-w-md">
          {/* Amount Input Section */}
          <div className={`${className} flex flex-col gap-2`}>
            <label htmlFor={id} className="text-xs font-semibold text-gray-700">
              {label}
            </label>
            <input
              id={id}
              type="number"
              className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Enter amount"
              disabled={amountDisabled}
              value={amount}
              onChange={(e) => amountChange && amountChange(Number(e.target.value))}
            />
          </div>
      
          {/* Currency Selector Section */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-700">Currency Type</p>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              value={selectedCurrency}
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
              disabled={currencyDisable}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      

        )
    }

export default InputBox