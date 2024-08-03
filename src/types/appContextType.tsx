import { Dispatch } from "react"

import { FormState } from "./formState"

export type AppContextType = {
    formData: {},
    setFormData: Dispatch<React.SetStateAction<FormState>>,
    handleChange: Function,
    handleSubmit: Function
};