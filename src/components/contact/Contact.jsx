import { useState } from "react";
import "./contact.scss";

const Contact = () => {
const [message,setMessage] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className='contact' id="contact">
      
      <div className="left">
       <img src="assets/OIP (14).jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
           <input type="text"  placeholder="Email"/>
           <textarea placeholder="Message" id="" cols="30" rows="10"></textarea>
           <button type="submit">Send</button>
           {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>


    </div>
  );
}

export default Contact;
