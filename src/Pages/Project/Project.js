import { useState } from "react";
import "./projects.css";
import { projects } from "./MyProject";
import { AnimatePresence, motion } from "framer-motion";
const Project = () => {
  let [currentActive, setCurrentActive] = useState("all projects");
  let [arr, setArr] = useState(projects);
  let cs = projects.filter((e) => {
    return e.category === "css";
  });

  let handleClick = (btnCategory) => {
    let arrFilter = projects.filter((e) => {
      const cate = e.category.find((j) => {
        return j == btnCategory;
      });
      return cate === btnCategory;
    });
    setArr(arrFilter);
  };

  let btnsFilter = [
    {
      title: "all projects",
      clickEvent: projects,
      classCondition: currentActive === "all projects" ? "active" : null,
      mainBtn: true,
    },
    {
      title: "HTML & CSS",
      clickEvent: "css",
      classCondition: currentActive === "HTML &amp; CSS" ? "active" : null,
      mainBtn: false,
    },
    {
      title: "JavaScript",
      clickEvent: "javascript",
      classCondition: currentActive === "JavaScript" ? "active" : null,
      mainBtn: false,
    },
    {
      title: "React & MUI",
      clickEvent: "react",
      classCondition: currentActive === "React &amp; MUI" ? "active" : null,
      mainBtn: false,
    },
    {
      title: "Bootstrap",
      clickEvent: "bootstrap",
      classCondition: currentActive === "Bootstrap" ? "active" : null,
      mainBtn: false,
    },
    {
      title: "React With Strapi",
      clickEvent: "strapi",
      classCondition: currentActive === "React With Strapi" ? "active" : null,
      mainBtn: false,
    },
  ];

  return (
    <main className="flex">
      <section className="flex  left-section">
{
  btnsFilter.map((el) => {
  return el.mainBtn === true ? (
    <button
      key={Math.random()}
onClick={(e) => {
  setCurrentActive(e.target.innerHTML);
   setArr( projects)
}}
className={el.classCondition}
>
{el.title}
</button>
  ) : (
    <button
      key={Math.random()}
onClick={(e) => {
  setCurrentActive(e.target.innerHTML);
   handleClick(el.mainBtn === false && el.clickEvent)
}}
className={el.classCondition}
>
{el.title}
</button>
  )
  })
}
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((e) => {
            return (
              <motion.article
                key={Math.random()}
                className="  card"
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ damping: 8, type: "spring", stiffness: 50 }}
              >
                <img width={266} src={e.imgPath} alt={e.title} />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{e.title} </h1>
                  <p className="sub-title">{e.description}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <a href={e.github} className="icon-github" target="_blank"></a>
                    </div>

                    <a className="link flex" href={e.demo}>
                      Demo
                      <span
                        style={{ alignSelf: "end", marginLeft:"5px" }}
                        className="icon-long-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Project;
