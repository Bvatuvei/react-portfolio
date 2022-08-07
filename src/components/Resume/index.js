import React from "react";
import resumeImg from '../../assets/images/Resume.png'

function Resume() {

    return (
        <section>
        <h2 className="fs-4">- My Skills</h2>
        <div className="skills-border">
          <ul className="row">
            <li className="col-sm-2">
              <img
              className="nav-logo-image"
                alt="html svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
              className="nav-logo-image"
                alt="css svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="javascript svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="bootstrap svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="materialui svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="mongodb svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image skills-background"
                alt="express svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="react svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image skills-background"
                alt="node svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="mysql svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="redux svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="jquery svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="heroku svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="git svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
              </li>
              <li className="col-sm-2">
              <img
               className="nav-logo-image"
                alt="npm svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
            </li>
          </ul>
        </div>
        <div>
        <h2 className="fs-4">- My Education</h2>
        <div className="">
        <ul>
          <li className="education-list">
            East High School
          </li>
          <li className="education-list">
            UofU Fullstack Coding Bootcamp
          </li>
        </ul>
        </div>
        </div>
        <div>
          <h3 className="fs-5">Download my full <a download href={resumeImg} target='_blank'>resume</a></h3>
        </div>
        </section>
    )
}

export default Resume;