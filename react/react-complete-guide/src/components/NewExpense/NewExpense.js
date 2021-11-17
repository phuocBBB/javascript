import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    };

    const [isEdit, setIsEdit] = useState(false);

    const AddNewExpenseHandler = () => {
        setIsEdit(true);
    };

    const CancelExpenseHandler = () => {
        setIsEdit(false);
    };

    return <div className='new-expense'>
        {!isEdit && <button onClick={AddNewExpenseHandler}>Add New Expense</button>}
        {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={CancelExpenseHandler}/>}
    </div>
};

export default NewExpense;