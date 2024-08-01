import { useState } from "react";

const Form = () => {
    const [errorMes, setErrorMes] = useState<string>("");
    const [cardHolder, setCardHolder] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<number>(0);
    const [cadDate, setCardDate] = useState<number>(0);
    const [cardCVC, setCardCVC] = useState<number>(0);

    return (
        <form>

            <fieldset className="card-user-field">
                <label htmlFor="card">Card holder name</label>
                <input 
                    type="text" 
                    id="card" 
                    placeholder="e.g. Jane Applessed" 
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                />
                <p className="error">Error</p>
            </fieldset>
            

            <fieldset className="card-number-field">
                <label htmlFor="number">card number</label>
                <input 
                    type="tel"
                    inputMode="numeric"
                    maxLength={16}
                    id="number" 
                    placeholder="e.g. 1234 5678 9123 0000"
                />
                <p className="error">Error</p>
            </fieldset>
           
            <fieldset className="card-date-field">

                <div className="labels">
                    <label htmlFor="mm-yy">ext. date (mm/yy)</label>
                    <label htmlFor="cvc">CVC</label>
                </div>

                <div className="inputs">

                    <input 
                        type="tel" 
                        id="mm-yy" 
                        placeholder="MM"
                        maxLength={2}
                        inputMode="numeric"
                    />
                    <input 
                        type="tel" 
                        id="mm-yy" 
                        placeholder="YY"
                        maxLength={2}
                        inputMode="numeric"
                    />

                    <input 
                        type="tel" 
                        id="cvc" 
                        placeholder="e.g. 123"
                        maxLength={3}
                        inputMode="numeric"
                    />

                </div>

                <div className="date-input-error">
                    <p className="error">Error</p>
                    <p className="error">Error</p>
                    <p className="error">Error</p>
                </div>
                
            </fieldset>
            
            <button type="submit">Confirm</button>

        </form>
    );
};

export default Form;
