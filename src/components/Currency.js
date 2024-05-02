import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'; // Import the CSS file

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (newCurrency) => {
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div className="currency-container">
      <label htmlFor="Currency" className="currency-label">
        Currency:
      </label>
      <select
        id="Currency"
        value={currency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
        className="currency-dropdown"
      >
        <option value="$">Dollar ($)</option>
        <option value="£">Pound (£)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupee (₹)</option>
      </select>
    </div>
  );
};

export default Currency;