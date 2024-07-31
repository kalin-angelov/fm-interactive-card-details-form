import { useState } from "react";

import Form from "./Form";
import CardImg from "./CardImg";
import Message from "./Message";

const Home = () => {
    const [cardNumber, setCardNumber] = useState<number>(0)
    const [compleat, setcompleat] = useState<boolean>(false);

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
