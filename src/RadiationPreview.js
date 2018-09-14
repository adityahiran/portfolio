import React from 'react';
export class RadiationPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTab: 1
    }
  }
  render() {
    return (
      <div style={{ minHeight: 600 }}>

        <div style={{ height: 100, padding: 0, margin: 0 }}>
          <div className="flex-row">
            <div style={{ height: 70, flexGrow: 1, textAlign: 'center', paddingTop: 30, borderBottom: (this.state.currentTab === 1) ? 'solid' : 'none' }} onClick={() => this.setState({ currentTab: 1 })}>Inventory</div>
            <div style={{ height: 70, flexGrow: 1, textAlign: 'center', paddingTop: 30, borderBottom: (this.state.currentTab === 2) ? 'solid' : 'none' }} onClick={() => this.setState({ currentTab: 2 })}>In Use</div>
            <div style={{ height: 70, flexGrow: 1, textAlign: 'center', paddingTop: 30, borderBottom: (this.state.currentTab === 3) ? 'solid' : 'none' }} onClick={() => this.setState({ currentTab: 3 })}>Disposed</div>
          </div>
        </div>

        <div style={{ height: 50, padding: 10, marginTop: 30 }}>
          You donot have any alerts at this point.
        </div>

        
      </div>
    );
  }
}
