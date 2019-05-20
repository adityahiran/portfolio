import React from 'react';

export class Reporting extends React.Component {
  render() {
    return (
      <li>
        <span>
          Reporting: Different reports are defined and categorized as snapshot and historical reports. Snapshot reports provide data instantaneously as they required reports based on the current state of all the devices. Historical reports on the other hand can be quite large for which a robust ETL pipeline is implemented using data streams that are piped into a downloadable csv file in AWS S3. [ Contributed to 80% of the codebase and 100% to the streaming pipeline. The streaming pipeline resolved a live show stopper issue for which I received a lot of appreciation. ]
        </span>
      </li>
    );
  }
}
