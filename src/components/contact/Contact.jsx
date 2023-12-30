import ContactForm from "./ContactForm";
import contactAnim from '../../../public/animation/contact-animation.json'
import Lottie from "lottie-react";
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="section-title text-8xl uppercase font-bold py-12">
        <h1>contact</h1>
        <h1>contact</h1>
      </div>
      <div className="contact flex mb-32 rounded-xl">
        <div className="basis-1/2">
          <ContactForm />
        </div>
        <div className="basis-1/2 w-full">
          <Lottie
            animationData={contactAnim}
            loop={true}
            className="rounded-br-2xl"
          />
        </div>
      </div>
    </>
  );
};
export default Contact;
