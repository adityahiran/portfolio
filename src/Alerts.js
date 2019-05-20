import React from 'react';

export class Alerts extends React.Component {
  render() {
    return (
      <li>
        <span>
          Alerts: On every UDP packet reported by an IoT device, an in-memory rules engine computes different alerts indicating the health of the sensors. The rules for defining alerts are customizable with different knowledge bases implemented using Drools. This service has a high throughput and is suitable for computing alerts based on different permutations of the sensor data. [ Code Contribution: 100% ]
        </span>
      </li>
    );
  }
}
