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
          Radiation: Specializes in radiation related resource tracking, inventory management, personnel management, use authorizations, audits,
          surveys, disposal management etc. [ ehs.ucop.edu/radiation ] [ Code Contribution: 60% ] [ Complexity: High ]
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
