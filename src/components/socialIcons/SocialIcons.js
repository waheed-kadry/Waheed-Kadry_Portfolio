/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./SocialIcons.css"
const SocialIcons = () => {
  let icons = [
    {
      link: "https://www.facebook.com/koko.elking.56884",
      class: "icon icon-facebook",
    },
    {
      link: "https://api.whatsapp.com/send?phone=+201158043496&text=Hi",
      class: "icon icon-whatsapp",
    },
    {
      link: "https://www.linkedin.com/in/waheed-kadry-862b3722b/",
      class: "icon icon-linkedin",
    },
    { link: "https://github.com/WaheedKadry", class: "icon icon-github" },
  ];
  return (
   <div className="social-icons">
     <div className="all-icons flex">
       {icons.map((e) => {
         return (
           <a
             className={e.class}
             key={Math.random()}
             href={e.link}
             target="_blank"
           ></a>
         );
       })}
     </div>
   </div>
  );
};

export default SocialIcons;
