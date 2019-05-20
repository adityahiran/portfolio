import React from 'react';

import { RadiationPreview } from './RadiationPreview';

export class Radiation extends React.Component {
  constructor() {
    super();
    this.state = {
      showPreview: false
    }
  }
  render() {
    return (
      <li>
        <span>
          Radiation Safety: Specializes in radiation related resource tracking, inventory management, personnel management, use authorizations, audits, surveys, disposal management etc. It is a system built to handle complex workflows. The radioactive nature of the inventories handled by the system accounts to complex computational workflows to keep track of not just the quantity but also the radioactivity of every radionuclide that is ordered, used, disposed and decayed. The audit behind use logs and disposal logs is extensive and is used for computing the current possession limits which in turn determines if new inventory can be ordered. Being an integral part of the team developing the system, every design choice had to be carefully analyzed and developed to scale and also be efficient in handling computational workflows and audits. [ ehs.ucop.edu/radiation ] [ Impact: Replaced a legacy system ] [ Code Contribution: 60% ] [ Complexity: High ]
          {!this.state.showPreview && (<a style={{ cursor: 'pointer' }} onClick={() => this.setState({ showPreview: true })}> [ Preview ]</a>)}
          {this.state.showPreview && (
            <div>
              <hr style={{ margin: 0 }} />
              <RadiationPreview />
              <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ showPreview: false })}>[ Hide Preview ]</a>
              <hr />
            </div>
          )}
        </span>
      </li>
    );
  }
}
