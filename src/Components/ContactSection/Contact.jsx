import React from "react";
import "../ContactSection/Contact.css";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "112cc0c4-0249-46cc-8c04-583daceacee6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert("your form submitted successfully, I will contact you soon.");
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact_tittle">
        <h1>Reach Out to Me</h1>
      </div>
      <div className="contact_Section">
        <div className="contact_left">
          <h1>Let's Connect</h1>
          <p>
            I’m open to new opportunities and would love to collaborate on your
            next project. Feel free to reach out anytime to discuss your ideas
            or requirements!
          </p>
          <div className="contact_details">
            <div className="contact_detail">
              <img src={mail_icon} alt="Email" />
              <p>aswinbinaj2002@gmail.com</p>
            </div>
            <div className="contact_detail">
              <img src={call_icon} alt="Phone" />
              <p>+91 9539711107</p>
            </div>
            <div className="contact_detail">
              <img src={location_icon} alt="Location" />
              <p>Kollam, Kerala</p>
            </div>
          </div>
        </div>

        <form className="contact_right" onSubmit={onSubmit}>
          <label>Your Name:</label>
          <input type="text" name="name" placeholder="Enter your name" />

          <label>Your Email:</label>
          <input type="email" name="email" placeholder="Enter your email" />

          <label>Your Message:</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
          ></textarea>

          <button className="contact_form_submission">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
