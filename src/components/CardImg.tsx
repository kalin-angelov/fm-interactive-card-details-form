import { User } from "../types/formType";

const CardImg = ({ formData }: User) => {
    
    const {cardHolder, cardNumber, cardDateMonth, cardDateYear, cardCVC} = formData;
    const num = String(cardNumber);
    const cardNum = `${num.slice(0, 4)} ${num.slice(4, 8)} ${num.slice(8, 12)} ${num.slice(12, 16)}`;  
    
    return (
        <div className="card-image">

            <div className="card-back">

                <p>{cardHolder === "" ? "000" : cardCVC}</p>
                
            </div>

            <div className="card-frond">
                
                <figure className="card-logo">
                    <img src="/images/card-logo.svg" alt="card logo" />
                </figure>

                <h1 className="card-number">{cardNumber === "" ? "0000 0000 0000 0000" : cardNum}</h1>

                <article>
                   
                    <h2> {cardHolder === "" ? "Jane Applessed": cardHolder}</h2>

                    <p>{cardDateMonth === "" ? "00" : cardDateMonth}/{cardDateYear === "" ? "00" : cardDateYear}</p>
                </article>

            </div>

        </div>
    );
};

export default CardImg;
