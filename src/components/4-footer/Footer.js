import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <p>
        © {new Date().getFullYear()} Copyright :
        <span style={{ color: "var(--blue)" }}>Waheed Kadry</span>.
      </p>
    </footer>
  );
};

export default Footer;
