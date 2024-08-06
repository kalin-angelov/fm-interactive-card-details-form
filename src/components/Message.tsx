import { FormProps } from "../types/formType";

const Message = ( { setCompleat, setFormData } : FormProps) => {
  
    const onClick = () => {
        setCompleat(false);
        setFormData({
            cardHolder: "",
            cardNumber: "",
            cardDateMonth: "",
            cardDateYear: "",
            cardCVC: ""
        })
    };

    return (

        <section className="message">

            <figure>
                <img src="/images/icon-complete.svg" alt="check" />
            </figure>

            <h2>Thank you!</h2>

            <p>We,ve added your card details</p>

            <button type="button" onClick={onClick}>Continue</button>

        </section>

    );
};

export default Message;
