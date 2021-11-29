import { useState } from 'react';

const useInput = (validateFunc) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validateFunc(enteredValue);
    const hasError = ! enteredValueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        setIsTouched(true);
    };

    const valueBlurHandler = () => {
        setIsTouched(true);
    };

    const resetValue = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        valueIsValid: enteredValueIsValid,
        hasError: hasError,
        valueChangeHandler: valueChangeHandler,
        valueBlurHandler: valueBlurHandler,
        resetValue: resetValue
    };
    

};

export default useInput;