import { ChangeEvent, FormEvent, useState, useContext, FC } from "react";

import { FormState } from "../types/formState";
import { AppProviderProps } from "../types/appProviderProps";
import { Context } from "../context/Context";

import Form from "./Form";
import CardImg from "./CardImg";
import Message from "./Message";

const Home: FC<AppProviderProps> = () => {
    const [cardNumber, setCardNumber] = useState<number>(0)
    const [compleat, setcompleat] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormState>({
        cardHolder: "",
        cardNumber: "",
        cardDateMonth: "",
        cardDateYear: "",
        cardCVC: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = (e :FormEvent) => {
        e.preventDefault();
    };

    const initialValue = {
        formData, 
        setFormData, 
        handleChange, 
        handleSubmit,
    };

    return (
        <Context.Provider value={initialValue}>
            <main>

                <CardImg />

                {
                    compleat ? <Message /> : <Form />
                }
        
            </main>
        </Context.Provider>
    );
};

export default Home;
