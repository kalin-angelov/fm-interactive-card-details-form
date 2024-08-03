import { useState, useContext } from "react";

import { Context } from "../context/Context";

const Form = () => {
    const { formData, setFormData, handleChange, handleSubmit } = useContext(Context);
    const [errorMes, setErrorMes] = useState<string>("");
 
    return (
        <form onSubmit={handleSubmit}>

            <fieldset className="card-user-field">
                <label htmlFor="cardHolder">Card holder name</label>
                <input 
                    type="text" 
                    id="cardHolder" 
                    name="cardHolder"
                    placeholder="e.g. Jane Applessed" 
                    value={formData.cardHolder}
                    onChange={handleChange}
                />
                <p className="error">Error</p>
            </fieldset>
            

            <fieldset className="card-number-field">
                <label htmlFor="cardNumber">card number</label>
                <input 
                    type="tel"
                    inputMode="numeric"
                    maxLength={16}
                    id="cardNumber" 
                    name="cardNumber"
                    placeholder="e.g. 1234 5678 9123 0000"
                    value={formData.cardNumber}
                    onChange={handleChange}
                />
                <p className="error">Error</p>
            </fieldset>
           
            <fieldset className="card-date-field">

                <div className="labels">
                    <label htmlFor="mm-yy">ext. date (mm/yy)</label>
                    <label htmlFor="cardCVC">CVC</label>
                </div>

                <div className="inputs">

                    <input 
                        type="tel" 
                        id="mm" 
                        name="cardDateMonth"
                        placeholder="MM"
                        maxLength={2}
                        inputMode="numeric"
                        value={formData.cardDateMonth}
                        onChange={handleChange}
                    />
                    <input 
                        type="tel" 
                        id="yy" 
                        name="cardDateYear"
                        placeholder="YY"
                        maxLength={2}
                        inputMode="numeric"
                        value={formData.cardDateYear}
                        onChange={handleChange}
                    />

                    <input 
                        type="tel" 
                        id="cvc" 
                        name="cardCVC"
                        placeholder="e.g. 123"
                        maxLength={3}
                        inputMode="numeric"
                        value={formData.cardCVC}
                        onChange={handleChange}
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
