import ContactForm from "./ContactForm";
import contactAnim from '../../../public/animation/contact-animation.json'
import Lottie from "lottie-react";
import './contact.css'

const Contact = () => {
  return (
    <>
      <h1 className="skill-heading text-8xl font-bold text-center mb-12">
        Contact Me
      </h1>
      <div className="contact flex mb-32 rounded-xl">
        <div className="basis-1/2">
          <ContactForm />
        </div>
        <div className="basis-1/2 w-full">
          <Lottie animationData={contactAnim} loop={true} className="rounded-br-2xl" />
        </div>
      </div>
    </>
  );
};
export default Contact;
