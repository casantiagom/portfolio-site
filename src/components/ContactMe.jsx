import React from "react"
import "./ContactMe.css"
const ContactMe = () => {
  return (
    <div className="main2">
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name&nbsp;&nbsp;
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email&nbsp;
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="10" />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactMe
