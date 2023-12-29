import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import "./contact.css";
import axios from "axios";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    axios
      .post("http://localhost:3000/sendEmail", { name, email, message })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="contact-form">
        <h3 className="capitalize text-white font-semibold text-3xl text-center my-6">
          I'm just one click away from you!
        </h3>
        <form
          onSubmit={handleSubmit}
          action=""
          className="space-y-4 px-6 py-12"
        >
          <div className="relative">
            <FaUser
              size={28}
              className="text-sky-400 absolute top-1/2 -translate-y-1/2 left-2"
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className="pl-12 w-full py-3 rounded-lg outline-none"
            />
          </div>
          <div className="relative">
            <MdEmail
              size={28}
              className="text-sky-400 absolute top-1/2 -translate-y-1/2 left-2"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="pl-12 w-full py-3 rounded-lg outline-none"
            />
          </div>
          <div className="relative">
            <FaMessage
              size={28}
              className="text-sky-400 absolute top-7 -translate-y-1/2 left-2"
            />
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Message"
              required
              className="pl-12 w-full py-3 rounded-lg outline-none"
            ></textarea>
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              type="submit"
              value="Send Email"
              className="submit-btn bg-sky-400 mx-auto px-5 py-2 rounded-lg text-md text-white font-semibold cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
