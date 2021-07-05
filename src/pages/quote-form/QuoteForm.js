import React, { useState } from "react";
import emailjs from "emailjs-com";
import useStyles from "./styles";

const QuoteForm = () => {
    const classes = useStyles();
    const YOUR_SERVICE_ID = "";
    const YOUR_TEMPLATE_ID = "";
    const YOUR_USER_ID = "";
    // to clear file input
    let randomString = Math.random().toString(36);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        from_document: "",
        to_document: "",
        message: "",
        theInputKey: randomString,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendMail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                YOUR_SERVICE_ID,
                YOUR_TEMPLATE_ID,
                e.target,
                YOUR_USER_ID
            )
            .then(
                (result) => {
                    setFormData({
                        user_name: "",
                        user_email: "",
                        user_phone: "",
                        message: "",
                        from_document: "",
                        to_document: "",
                    });
                    alert("Success!");
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                    alert("Error");
                }
            );
    };
    return (
        <div className={classes.quoteFormWrap}>
            <div className={classes.quoteFormHeader}>
                <h2>Online Quotation Form</h2>
                <h3>
                    Please use the below form to request a quotation for a
                    translation, or translation-related project. Please be sure
                    to include as much information as possible so we can revert
                    quickly and precisely.
                </h3>
            </div>

            <form
                className={classes.quoteForm}
                encType="multipart/form-data"
                method="post"
                onSubmit={sendMail}
            >
                <input
                    type="text"
                    placeholder="Your name..."
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    placeholder="Your email address..."
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Your telephone number..."
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Language of your existing document..."
                    name="from_document"
                    value={formData.from_document}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Language(s) to be translated into..."
                    name="to_document"
                    value={formData.to_document}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    className={classes.quoteFile}
                    name="my_file"
                    key={formData.theInputKey || ""}
                />
                <p>
                    Note that we can only handle uploading one file via this
                    form. If you have more than one file to send us, either add
                    them to a zip file and upload the zip file, or email us the
                    documents instead to{" "}
                    <strong>info@jjglobaltranslation.com</strong>
                </p>
                <textarea
                    placeholder="Additional information..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button type="submit">Request Quote</button>
            </form>

            <p>
                The confidentiality of your enquiry and any files to JJGlobal
                Translation will be held in the strictest of confidence in line
                with the latest policies pertaining to GDPR. Submitting
                information on this page is acknowledgement that you accept our
                terms and conditions and our privacy policy as stated at: Terms &amp; Conditions
            </p>
        </div>
    );
};

export default QuoteForm;
