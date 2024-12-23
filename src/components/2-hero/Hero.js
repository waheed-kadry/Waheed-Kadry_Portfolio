/* eslint-disable react/jsx-no-target-blank */
// @ts-nocheck
import "./hero.css";
import Lottie from "lottie-react";
import landingPageAnimation from "../../../src/animation/landing page.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import waheedImg from "../../../src/Image/me.png";
import SocialIcons from "../../components/socialIcons/SocialIcons";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            src={waheedImg}
            className="avatar"
            alt=""
            initial={{ transform: "scale(0)", opacity: 0 }}
            animate={{ transform: "scale(1)", opacity: 1 }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          className="title t1"
          initial={{ transform: "scale(0)", opacity: 0 }}
          animate={{ transform: "scale(1)", opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Waheed Kadry
        </motion.h1>
        <motion.h1
          className="title t2"
          initial={{ transform: "scale(0)", opacity: 0 }}
          animate={{ transform: "scale(1)", opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          Front End Developer
        </motion.h1>
        <p className="sub-title">
          Hello, my name is waheed kadry, I am a web developer with 1 year
          experience in React.js Front End Web and enjoy building everything
          with JavaScript. During this time, I learned a lot of techniques,
          created many great websites, and collaborated with great developers.
          So I always seek an opportunity that matches my skills, to make the
          most of everything I have learned.
        </p>
        <SocialIcons />
      <a
      className="download-cv"
        rel="noreferrer"
        target="_self"
        href="https://drive.google.com/u/0/uc?id=14QWf09Oj1EXhoAIgvX4lsVWbzNN-UXkR&amp;export=download"
        download=""
      >
        Download My Resume
      </a>
      </div>

      <div className="right-section animation ">
        <Lottie
          className="contactAnimation"
          loop
          //  style={{ height: "355px" }}
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.9);
          }}
          animationData={landingPageAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
