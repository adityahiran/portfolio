import React from 'react';

import { Radiation } from './Radiation';
import { Tracker } from './Tracker';
import { Monitor } from './Monitor';
import { Assessment } from './Assessment';
import { UIComponents } from './UIComponents';
import { Listener } from './Listener';
import { Parser } from './Parser';
import { Alerts } from './Alerts';
import { History } from './History';
import { Reporting } from './Reporting';
import { Communications } from './Communications';
import { RESTAPI } from './RESTAPI';
import { UI } from './UI';
import { Auth } from './Auth';

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
        <span>Develop distributed systems with a focus on maintainability, performance and user-friendliness.</span>

        <h3>Work Experience</h3>

        <div><strong>Full Stack Software and Data Engineer:</strong> Fleet Complete – September 2018 to Present</div>

        <div className="m10px">
          <i>Projects</i>
          <div>
          Connvex – Being a venture of Fleet Complete, the goal of Connvex was to become an IoT Cloud platform which enables companies to build IoT solutions in partnership with Connvex. When I started as only the second developer in September, the project was in its inception with 15% of the codebase compared to what it is today. My contributions have played a key role in delivering a cloud based IoT platform with multi tenant support while we partnered with our first client for an IoT solution. Architecturally, the code was organized into microservices and the data was spread across different data sources that can scale into a data lake. At its core, different IoT devices report data from sensors as UDP packets, which are captured and passed through a pipeline to parse and persist for other services to consume. The platform is comprised of the following components :
          </div>
          <div>
            <ol>
              <Listener />
              <Parser />
              <Alerts />
              <History />
              <Reporting />
              <Communications />
              <RESTAPI />
              <UI />
              <Auth />
            </ol>
          </div>
        </div>

        <div><strong>Full Stack Web Applications Developer:</strong> University of California, Davis – March 2015 to August 2018</div>

        <div className="m10px">
          <i>Projects</i>
          <div>
            Risk and Safety Solutions : Worked on a comprehensive suite of web applications catering to the requirements of Risk and Safety. Based in UC Davis, our first clients have been the 15 campuses under the UC system. With more commercialization the company expanded its client base outside of the UC system. Some of the projects I have contributed to, include :
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
            <strong>Frameworks/Platforms:</strong> NodeJS, Spring, Spark, Kafka, AWS, GraphQL, Drools, ReactJS, Angular
          </li>
          <li>
            <strong>Databases/Cache:</strong> MongoDB, Cassandra, Redis, MS SQL, MySQL, Oracle, AWS S3 
          </li>
          <li>
            <strong>Testing:</strong> Load Testing (JMeter, cassandra-stress), E2E (Protractor), Spec (Karma), Integration (Mocha), Unit (Mocha, Junit).
          </li>
          <li>
            <strong>Software Practices:</strong> Test Driven Development, SCRUM, Kanban.
          </li>
          <li>
            <strong>Build and Deploy:</strong> Kubernetes, Docker, Jenkins, New Relic.
          </li>
          <li>
            <strong>Dependency Managers:</strong> Gradle, Maven, NPM.
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
