import React from 'react';

export class CoverLetter extends React.Component {
  render() {
    return (
      <div className="app">

        <h1>Cover Letter</h1>

        <div>
        Dear Sir/Madam,<br/><br/>
        Kindly allow me to share two of my accomplishments over here. I am confident that it will give you an insight into my thinking as an agile full stack software and data engineer and how I can be a good fit for your organization.
        </div>

        <h3>Accomplishment @ Fleet Complete [Present]</h3>

        <div>
          Resolving a live show stopper issue related to Big Data when generating reports. Steps  include :
        </div>

        <ol>
          <li>Understanding the problem</li>
          <li>Proposing a solution to fix the problem</li>
          <li>Implementing a streaming solution</li>
          <li>Additional enhancements for better QPS (queries per second)</li>
        </ol>

        <div>
          First, I have installed an app monitoring agent called new relic to identify bottlenecks in the workflows. It gave me insights into the two critical problems : 
        </div>

        <ul>
          <li>memory usage of the app was too high as the application was trying to load the datasets from cassandra into the application’s memory for transforming it into user defined reports</li>
          <li>Low throughput as the event loop of the javascript V8 engine [NodeJS] was being blocked</li>
        </ul>

        <div>
          Second, I proposed to split the workflow of generating reports into two, based on a threshold that can separate instant reporting from an offline message queue based reporting suitable for larger datasets. 
        </div>

        <div>
          Third, a new strategy had to be implemented for generating a report handling larger datasets
        </div>

        <ul>
          <li>Data Streaming: I refactored the application’s workflow and operations to use data streaming meaning only small chunks of data will be loaded into the application’s memory. The algorithms used to perform transformations had to be re-written as at any given point in time, the application would have access to only a small chunk of data instead of the entire dataset. I completed implementing the streaming pipeline which includes a readable stream from cassandra, a few transform streams [ like grouping, filtering, removing duplicates, transforming to csv ] and a writable stream to pipe to AWS S3 in a csv format. Once the streaming is complete, we went with a simple notification strategy where the user was notified with a link to download the report.  Streaming has really helped cut down the memory usage in the application and hence helping the workflow to scale for larger datasets.</li>
          <li>Queuing the requests: For improving the QPS (queries per second) in the reporting microservice, it was important to push the requests for larger datasets to a message queue before it can be processed. This helped in resolving the event loop much quicker so that it is not blocked by the intensive data operations when working with large datasets. </li>
        </ul>

        <div>
          Outcome : The solution came at a critical point in the software’s lifecycle and my solution was a great success in restoring the reporting functionality back to normalcy.
        </div>

        <h3>Accomplishment @ UC Davis</h3>

        <div>
          Meeting delivery deadlines at very short notice by optimizing implementation strategies such that a minimum viable product can be delivered on time. Optimizations of this sort require :
        </div>

        <ol>
          <li>Bringing team members up to speed and explaining why and how the feature can fulfill the business requirements.</li>
          <li>How the feature can be broken into leaner parts such that the most critical aspect is delivered first as a minimum viable product.</li>
        </ol>

        <h4>Personal Experience</h4>

        <h5>Context</h5>

        <div>
          My organization works on web applications pertaining to the domain of "Risk and Safety". As it serves for campuses under the University of California system, the university administrators choose to use our applications. Though these applications solve the mainstream problems in the domain, very often they require some sort of on-boarding such that the client can start using it.
        </div>

        <h5>Scenario</h5>

        <div>
          One of the UC campuses, wanted to start using the UC Safety Radiation system. But the system did not yet have a key component which deals with the license and limits on how much radioactivity can be authorized for the campus. Since at the time I was developing this feature when we had been given a sharp deadline to deliver the system within 4 days. The feature would allow the usage of each radioactive element to be automatically associated with the correct category on the license. The level of automation to achieve this is quite complicated given the rules and how they differ from campus to campus.
        </div>

        <h5>Solution</h5>

        <div>
          <p>
          During the first two days, I have come up with an optimized strategy with a compromise of 5% reduction in the automation that is required. By the end of the second day, I have completed the implementation of this feature. On the third day, I have come up with diagrams like flow charts which helped me present my idea.
          </p>
          <p>
          The idea includes automatically associating the elements to the license rules if it is a straight forward association. But in the cases of conflict, the system would delegate the responsibility to the user which in this case will be the Radiation Safety Officer on campus. In the conflicting cases, the user will be presented a few probable license rules from which the correct one will be chosen. This approximation based automation worked very well since this particular use case didn't really need a 100% automation. 
          </p>
        </div>

        <h5>Outcome</h5>

        <div>
          Explaining the cost to value of this optimized strategy helped my team to agree with me. This scenario specifically has given me a lot of appreciation as the client started using the system and has become the first client to do so.
        </div>

        <br/>

        <div>
          Regards,
        </div>
        <div>
          Aditya Hiran Pilla
        </div>
      </div>
    );
  }
}
