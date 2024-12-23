import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  let [burgerIcon, setBurgerIcon] = useState("icon-align-justify");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    document.body.classList.add(theme);
  }, [theme]);
  let links = [
    { title: "Home", icon: "icon-home", path: "/" },
    { title: "About", icon: "icon-info", path: "/about" },
    { title: "Projects", icon: "icon-calendar-check-o", path: "/projects" },
    { title: "Contact", icon: "icon-phone", path: "/Contact" },
  ];
  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className={`menu ${burgerIcon}`}
        onMouseEnter={() => setBurgerIcon("icon-align-center")}
        onMouseLeave={() => setBurgerIcon("icon-align-justify")}
      ></button>
      
      <a className="logo" href="/" style={{color:"var(--title)", fontWeight: "bold"}}><span>M</span>y <span>P</span>ortfolio</a>


      <nav>
        <ul className="flex">
          {links.map((e) => {
            return (
              <li key={e.title} style={{ display: "flex", gap: "5px" }}>
                <span className={e.icon}></span>
                <Link to={e.path}>{e.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        className="mode flex"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
        }}
      >
        <span className={theme === "light" ? "icon-sun" : "icon-moon-o"}></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            {links.map((e) => {
              return (
                <li
                  key={e.title}
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center", marginTop:"10px"
                  }}
                       onClick={() => {
                  setshowModal(false);
                }}
                >
                  <span className={e.icon}></span>
                  <Link to={e.path}>{e.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
