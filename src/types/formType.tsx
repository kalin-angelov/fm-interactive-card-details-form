export type FormState = {
    cardHolder: string ,
    cardNumber: number | string,
    cardDateMonth: number| string,
    cardDateYear: number| string,
    cardCVC: number| string,
};

export interface User {
    formData: FormState
};

export interface FormProps {
    setCompleat: React.Dispatch<React.SetStateAction<boolean>>,
    setFormData: React.Dispatch<React.SetStateAction<FormState>>,
};