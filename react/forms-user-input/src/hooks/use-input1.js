import { useState } from 'react';

const useInput = (validateFunc) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isInputValid = validateFunc(enteredValue);
    const hasError = !isInputValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        setIsTouched(true);
    };

    const valueBlurHandler = (event) => {
        setIsTouched(true);
    };

    const resetValue = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isInputValid: isInputValid,
        hasError: hasError,
        valueChangeHandler: valueChangeHandler,
        valueBlurHandler: valueBlurHandler,
        resetValue: resetValue
    };
};

export default useInput;