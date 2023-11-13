import { useState } from "react";
import { validateEmail } from "../utils/helpers";

const handleForm = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        setErrorMessage("This form is not connected to anything. Sorry!");
        console.log(formState);
    }

    function validateForm(event) {
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage("Please, enter a valid email.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`Your ${event.target.name} is required!`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
    }

    return (
        <section className="container-full contact">
            <h1>Contact</h1>
            <form className="contact-form" onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={validateForm} name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={validateForm} name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={validateForm} rows="5" required />
                </div>
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default handleForm;