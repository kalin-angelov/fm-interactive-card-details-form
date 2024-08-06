import { useState } from "react";

import { FormState } from "../types/formType";

import Form from "./Form";
import CardImg from "./CardImg";
import Message from "./Message";

const Home = () => {
    const [compleat, setCompleat] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormState>({
        cardHolder: "",
        cardNumber: "",
        cardDateMonth: "",
        cardDateYear: "",
        cardCVC: ""
    });

    return (
        <main>

            <CardImg formData={formData} />

            {
                compleat ? 
                <Message 
                    setCompleat={setCompleat} 
                    setFormData={setFormData} 
                /> 
                : 
                <Form 
                    setCompleat={setCompleat} 
                    setFormData={setFormData} 
                />
            }
    
        </main>
    );
};

export default Home;
