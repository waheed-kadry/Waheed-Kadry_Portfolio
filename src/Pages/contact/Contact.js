import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import { useRef } from "react";
import doneAnimation from "../../../src/animation/done.json";
import contactAnimation from "../../../src/animation/contact us.json";
import SocialIcons from "../../components/socialIcons/SocialIcons";
const Contact = () => {
  const [state, handleSubmit] = useForm("xleyaeqe");
  const lottieRef = useRef();
  return (
    <>
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"> </span>
        Contact Me
      </h1>
      <p className="sub-title">Name: Waheed Safwat Kadry</p>
      <p className="sub-title">Address: Zagazig, ElSharqia, Egypt</p>
      <p className="sub-title" >Phone: +20 115 804 3496</p>
      <p className="sub-title">Gmail: waheedonly256@gmail.com</p>
      
<SocialIcons/>
      <div
        className="flex contact-contain"
        style={{ justifyContent: "space-between", flexWrap: "wrap" }}
      >
        <form onSubmit={handleSubmit}>
        <div>
        <p className="sub-title">Use a valid email address, So I can reply back.</p>
        </div>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              style={{
                display: "flex",
                marginTop: "15px",
                alignItems: "center",
                flexWrap: "wrap",
                color:"var(--title)"
              }}
            >
              <Lottie
                loop={false}
                style={{ height: "37px", }}
                animationData={doneAnimation}
              />
              Your Message Has Been Successfully 👌
            </p>
          )}
          {state.errors && "can't Send Your Email"}
        </form>
        <div className="contact-ani">
          <Lottie
            className="contactAnimation"
            loop
            lottieRef={lottieRef}
            onLoadedImages={() => {
              // https://lottiereact.com/
              lottieRef.current.setSpeed(0.9);
            }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  
  </>);
};


export default Contact;
