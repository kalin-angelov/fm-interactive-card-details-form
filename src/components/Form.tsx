import { useForm, SubmitHandler } from "react-hook-form";

import { FormProps, FormState } from "../types/formType";


const Form = ({ setCompleat, setFormData }: FormProps) => {

    const { register, handleSubmit, formState: { errors }} = useForm<FormState>()

    const onSubmit: SubmitHandler<FormState> = (data) => {
        setFormData(data);
        setCompleat(true);
    };
 
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <fieldset className="card-user-field">
                <label htmlFor="cardHolder">Card holder name</label>
                <input 
                    type="text" 
                    id="cardHolder" 
                    placeholder="e.g. Jane Applessed" 
                    {...register("cardHolder", { required: "Can't be blank", 
                        pattern:{
                            value: /^[A-Za-z]+ [A-Za-z]+$/gm,
                            message: "Invalid name"
                        }
                    })}
                    aria-invalid={errors.cardHolder ? "true" : "false"}
                />
                {errors.cardHolder && <p className="error">{errors.cardHolder.message}</p>}
            </fieldset>
            

            <fieldset className="card-number-field">
                <label htmlFor="cardNumber">card number</label>
                <input 
                    type="tel"
                    id="cardNumber" 
                    placeholder="e.g. 1234 5678 9123 0000"
                    maxLength={16}
                    {...register("cardNumber", {
                        required: "Can't be blank", 
                        pattern: {
                            value:/^[0-9]+$/gm,
                            message: "Wrong format, numbers only"
                        },
                        maxLength: {
                            value: 16,
                            message: "Can't be less or more than 16 digits"
                        },
                        minLength: {
                            value: 16,
                            message: "Can't be less or more than 16 digits"
                        },
                    })}
                    aria-invalid={errors.cardHolder ? "true" : "false"}
                />
                {errors.cardNumber && <p className="error">{errors.cardNumber.message}</p>}
            </fieldset>
           
            <fieldset className="card-date-field">

                <div className="labels">
                    <label htmlFor="mm-yy">ext. date (mm/yy)</label>
                    <label htmlFor="cardCVC">CVC</label>
                </div>

                <div className="inputs">

                    <fieldset className="date">
                        <input 
                            type="tel" 
                            id="mm-yy" 
                            placeholder="MM"
                            maxLength={2}
                            {...register("cardDateMonth", { 
                                required: "Can't be blank", 
                                pattern: {
                                    value:/^[0-9]+$/gm,
                                    message: "Wrong format, numbers only"
                                },
                                maxLength: {
                                    value: 2,
                                    message: "Can't be less or more than 2 digits"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Can't be less or more than 2 digits"
                                },
                            })}
                            aria-invalid={errors.cardDateMonth ? "true" : "false"}
                        />

                        {errors.cardDateMonth && <p className="error">{errors.cardDateMonth.message}</p>}

                    </fieldset>
                    
                    <fieldset className="date">
                        <input 
                            type="tel" 
                            id="mm-yy" 
                            placeholder="YY"
                            maxLength={2}
                            {...register("cardDateYear", {
                                required: "Can't be blank", 
                                pattern: {
                                    value:/^[0-9]+$/gm,
                                    message: "Wrong format, numbers only"
                                },
                                maxLength: {
                                    value: 2,
                                    message: "Can't be less or more than 2 digits"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Can't be less or more than 2 digits"
                                },
                            })}
                            aria-invalid={errors.cardDateYear ? "true" : "false"}
                        />

                        {errors.cardDateYear && <p className="error">{errors.cardDateYear.message}</p>}   

                    </fieldset>
                    
                    <fieldset className="date">
                        <input 
                            type="tel" 
                            id="cvc"
                            placeholder="e.g. 123"
                            maxLength={3}
                            {...register("cardCVC", { 
                                required: "Can't be blank", 
                                pattern: {
                                    value:/^[0-9]+$/gm,
                                    message: "Wrong format, numbers only"
                                },
                                maxLength: {
                                    value: 3,
                                    message: "Can't be less or more than 3 digits"
                                },
                                minLength: {
                                    value: 3,
                                    message: "Can't be less or more than 3 digits"
                                },
                            })}
                            aria-invalid={errors.cardCVC ? "true" : "false"}
                        />

                        {errors.cardCVC && <p className="error">{errors.cardCVC.message}</p>}
                    </fieldset>
                    
                </div>

            </fieldset>
            
            <button type="submit">Confirm</button>

        </form>
    );
};

export default Form;
