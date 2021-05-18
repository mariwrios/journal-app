
import { useState } from "react"



export const useForm = <T extends Object>(initialState: T) => {

  const [value, setValue] = useState(initialState)

  const reset = (newFormState = initialState) => {
    setValue(newFormState)
  }

  const handleInputChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value
    })
  }

  return { value, handleInputChange, reset }
}