import { useState } from "react";


const Home = () => {
    const [cardNumber, setCardNumber] = useState<number>(0)

    return (
        <main>
            <div className="card-image">

                <figure className="card-back">
                    <img src="/images/bg-card-back.png" alt="card back" />
                </figure>

                <section className="card-information">
                    
                    <figure className="card-logo">
                        <img src="/public/images/card-logo.svg" alt="card logo" />
                    </figure>

                    <h1 className="card-number">0000 0000 0000 0000</h1>

                    <article>
                        <h2>Jane Applessed</h2>

                        <p>{cardNumber}</p>
                    </article>

                </section>
            </div>

            <form>

                <fieldset>
                    <label htmlFor="card">Card holder name</label>
                    <input 
                        type="text" 
                        id="card" 
                        placeholder="e.g. Jane Applessed" 
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="number">card number</label>
                    <input 
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9\s]{13,19}"
                        maxLength={19}
                        required
                        id="number" 
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="date">ext. date (mm/yy) cvc</label>
                    <input 
                        type="number" 
                        id="date" 
                        placeholder="MM"
                    />
                    <input 
                        type="number" 
                        id="date" 
                        placeholder="YY"
                    />
                    <input 
                        type="number" 
                        id="date" 
                        placeholder="e.g. 123"
                    />
                </fieldset>
                
                <button type="submit">Confirm</button>
            </form>
        </main>
    );
};

export default Home;
