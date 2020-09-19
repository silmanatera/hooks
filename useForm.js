import { useState } from "react"

// Obtiene el valor de un campo de texto
export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState)
    }

    const handleInput = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInput, reset];
}