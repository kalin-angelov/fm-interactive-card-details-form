import { ChangeEvent, FormEvent, useState } from "react";

import { FormState } from "../types/formState";

import Form from "./Form";
import CardImg from "./CardImg";
import Message from "./Message";

const Home = () => {
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

    return (
        <main>

            <CardImg />

            {
                compleat ? <Message /> : <Form />
            }
    
        </main>
    );
};

export default Home;
