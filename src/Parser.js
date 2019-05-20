import React from 'react';

export class Parser extends React.Component {
  render() {
    return (
      <li>
        <span>
          Parser: As a subscriber, the raw data is picked up and parsed for data from different sensors. The data from each device is then cached in mongodb to support geospatial queries. API responses that are more generic like the address information obtained from the Google Maps API are cached in Redis. [ Code Contribution: 70% ]
        </span>
      </li>
    );
  }
}
