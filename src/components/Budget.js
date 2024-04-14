import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, handleBudgetChange , Location } = useContext(AppContext);

    const newBudget = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleEditBudget = (event)=>{
        if(event.target.value < newBudget) alert("Error: budget is lower than expenses.")
        else if (event.target.value> 20000) alert("Budget cannot exceed 20,000.")
        else handleBudgetChange({type: "SET_BUDGET", payload: event.target.value})        
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Location}</span><input type="number" step={10} value={budget} onChange={handleEditBudget}/>
        </div>
    );
};
export default Budget;