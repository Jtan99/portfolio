import React, { useEffect, useState } from "react"

// Styles
import "./projects.css"

// components
import { Heading } from "components/Heading/Heading"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare"
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock"

import PortfolioItem from "./PortfolioItem/PortfolioItem"
import projects from "./data/details.json"

// Define the Portfolio component
const Projects = () => {
  let uniqueCategories = [...new Set(projects.map(project => project.category))];
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);
  const [projectCategories, setProjectCategories] = useState(uniqueCategories);


  useEffect(() => {
    let filteredData = [];
    filteredData = projects.filter((project) => project.category === selected);
    setData(filteredData);
  }, [selected, projects]);

  // Return JSX for rendering the component
  return (
    <section
      className="projects"
      name="proijects"
      id="projects"
    >
      <Heading text="Projects" style={{ padding: "3rem" }} />
      {/* Remove for now, when there is enough projects i will add categorization */}
      {/* <div className="list">
        {projectCategories &&
          projectCategories.map((list) => (
            <PortfolioItem
              title={list}
              key={list}
              active={selected === list}
              setSelected={setSelected}
              id={list}
            />
          ))}
      </div> */}
      <div className="row">
        {data.length &&
          data.map((item, index) => (
            <PortfolioItem item={item} key={index} />
            // <div
            //   className="column"
            //   key={index}
            //   id={`portfolioItem${index}`}
            //   data-aos="zoom-in-up"
            //   data-aos-anchor={`#portfolioItem${index}`}
            // >
            //   <img src={process.env.PUBLIC_URL + item?.img} alt={item.title} />
            //   <div className="overlay">
            //     <div className="left">
            //       <h3>{item.title}</h3>
            //       {item.tagline && <p>{item.tagline}</p>}
            //     </div>
            //     <div className="right">
            //       {item.repositoryUrl !== "private" ? (
            //         <a href={item.repositoryUrl}>
            //           <FontAwesomeIcon
            //             icon={faGithubSquare}
            //             size="2x"
            //             className="icon"
            //             style={{ marginRight: "0.3em" }}
            //             title="Github Repo"
            //           />
            //         </a>
            //       ) : (
            //         <a href="#_">
            //           <FontAwesomeIcon
            //             icon={faUserLock}
            //             size="2x"
            //             className="icon"
            //             style={{ marginRight: "0.3em" }}
            //             title="Private Repo"
            //           />
            //         </a>
            //       )}

            //       {item.liveUrl !== "" && (
            //         <a
            //           href={item.liveUrl}
            //           target="_blank"
            //           rel="noopener noreferrer"
            //         >
            //           <FontAwesomeIcon
            //             icon={faExternalLinkSquareAlt}
            //             size="2x"
            //             className="icon"
            //             title="Live view"
            //           />{" "}
            //         </a>
            //       )}
            //     </div>
            //   </div>
            // </div>
          ))}
      </div>
    </section>
  )
}

export default Projects
