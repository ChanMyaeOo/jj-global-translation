import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import useStyles from "./styles";
import Quote from "../../images/quote.webp";

const Contact = () => {
    const classes = useStyles();
    
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function sendMail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_eaw9okn",
            "contact_form",
            e.target,
            "user_zQ9il5a0ZaD0tcl6PUzMs"
        ).then(
            (result) => {
                setFormData({
                    user_name: "",
                    user_email: "",
                    user_phone: "",
                    message: "",
                });
                alert("Success!");
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
                alert('Error')
            }
        );
    }
    return (
        <div className={classes.contact}>
            <h2>Contact JJ Global Translation Agency</h2>
            <div className={classes.contactTitleWrap}>
                <h3>
                    Contact details and form for JJ Global Translation
                    Agency{" "}
                    <Link to="/" className={classes.contactRes}>
                        <em>Contact Human Resources</em>
                    </Link>
                </h3>
                <Link to="/" className={classes.contactHR}>
                    <em>Contact Human Resources</em>
                </Link>
            </div>

            <div className={classes.contactAddress}>
                <Link to="/" className={classes.contactEmail}>
                    <div>info@jjglobaltranslation.com</div>
                    <p>✉</p>
                </Link>

                <Link to="/" className={classes.contactPhone}>
                    <div>+442038387246</div>
                    <p>✆</p>
                </Link>
            </div>
            <hr />

            <div className={classes.contactForm}>
                <h3>Contact Form</h3>
                <Link to="/quote">
                    <img
                        src={Quote}
                        alt="quote"
                        className={classes.contactQuote}
                    />
                </Link>
                <p>
                    Please use the below form to contact us regarding any of our
                    translation services, if you would like to speak directly
                    with a project manager, our accounts department or public
                    relations. If you are in search of a translation quotation,
                    please select "Get your free online quote today":
                </p>

                <form className={classes.contactFormWrap} onSubmit={sendMail}>
    
                    <input
                        type="text"
                        placeholder="Your name..."
                        required
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Your email address..."
                        required
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Your telephone number..."
                        required
                        name="user_phone"
                        value={formData.user_phone}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="Your Message..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
