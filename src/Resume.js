import React from 'react';

import { Radiation } from './Radiation';
import { Tracker } from './Tracker';
import { Monitor } from './Monitor';
import { Assessment } from './Assessment';
import { UIComponents } from './UIComponents';

export class Resume extends React.Component {
  render() {
    return (
      <div className="app">

        <h1 className="title">Aditya Hiran Pilla</h1>

        <div className="flex-column">
          <div><i>Email:</i> p.adityahiran@gmail.com</div>
          <div><i>Location Preferences:</i> Toronto, Canada</div>
        </div>

        <h3>Objective</h3>
        <span>Develop web applications with a focus on maintainability, performance and user-friendliness.</span>

        <h3>Work Experience</h3>

        <div><strong>Full Stack Web Applications Developer:</strong> University of California, Davis – March 2015 to August 2018</div>

        <div className="m10px">
          <i>Projects</i>
          <div>
            UC Safety Suite of Applications: Worked on a variety of different web applications that handle business scenarios in the
            area of environment, health and safety for all the 15 campuses under the UC system. Below are a few applications I worked
            on :
          </div>
          <div>
            <ol>
              <Radiation />
              <Tracker />
              <Monitor />
              <Assessment />
              <UIComponents />
            </ol>
          </div>
        </div>

        <div><strong>Web Applications Developer:</strong> University of California, Berkeley – July 2014 to February 2015</div>

        <div className="m10px">
          <i>Projects</i>
          <div>
            <ol>
              <li>
                Data Migration: Two datasets representing the campus lab data were compared and merged. Also developed an automated batch job that keeps
                the datasets in sync.
              </li>
              <li>
                Test suite implementation - Developed a suite of automated tests.
              </li>
              <li>
                 Build and deploy - Worked on automating the build, test and deploy process using Jenkins with Ant.
              </li>
            </ol>
          </div>
        </div>

        <div><strong>Software Developer:</strong> SymSoft Solutions LLC - January to June 2013</div>

        <div className="m10px">
          <i>Projects</i>
          <div>
            <ol>
              <li>
                Feed Data Cache: Developed a web application that fetches feed data from social media like Youtube, RSS and Twitter to populate
                a news widget on the Client's website [ ca.gov ].
              </li>
              <li>
                 Calendar app: Developed to manage the in-house calendaring events for the client.
              </li>
            </ol>
          </div>
        </div>

        <div><strong>Web Applications Developer:</strong> California ISO - June to January 2013</div>

        <div className="m10px">
          <i>Projects</i>
          <div>
            <ol>
              <li>
                CRUD: Developed a web application to replace the manual ad hoc database operations performed for validating and correcting
                the data in the database.
              </li>
            </ol>
          </div>
        </div>

        <h3>Education</h3>
        <ul>
          <li>
            <strong>M.S. in Computer Science:</strong> California State University, Sacramento, USA - May 2014.
          </li>
          <li>
            <strong>B.Tech in Computer Science and Engineering:</strong> JNTU, Kakinada, India - May 2010.
          </li>
        </ul>

        <h3>Technical Skills</h3>
        <ul>
          <li>
            <strong>Programming:</strong> Java, Javascript, Scala, Groovy, C#, C++, C.
          </li>
          <li>
            <strong>Web Frameworks:</strong> Spring MVC, React, Angular, Nodejs, Grails, Android, ASP.Net.
          </li>
          <li>
            <strong>Testing:</strong> E2E (Protractor), Spec (Karma), Integration + Unit (Junit), Mock.
          </li>
          <li>
            <strong>Databases:</strong> MongoDB, Redis, MS SQL, MySQL, Oracle.
          </li>
          <li>
            <strong>Software Practices:</strong> Test Driven Development, SCRUM, Kanban.
          </li>
          <li>
            <strong>Build and Deploy:</strong> Docker, Jenkins.
          </li>
          <li>
            <strong>Dependency Managers:</strong> Maven, NPM.
          </li>
          <li>
            <strong>Version Control System:</strong> Git.
          </li>
        </ul>

        <h3>Online Profiles</h3>
        <div>https://github.com/adityahiran</div><div>https://www.linkedin.com/in/adityahiran</div>
      </div>
    );
  }
}
