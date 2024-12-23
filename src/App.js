import Footer from "./components/4-footer/Footer";
import Header from "./components/1-header/Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  let [showScrollBtn, setShowScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  return (
<>
       <div id="up" className="container">
       <Header />
        <Outlet />
        <a
          href="#up"
          style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }}
        >
          <button className="icon-angle-up scroll2Top"></button>
        </a>
      </div>
        <Footer />
       
</>
  );
}

export default App;

