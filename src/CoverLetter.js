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
