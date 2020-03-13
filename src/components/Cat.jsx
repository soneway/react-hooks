import React from 'react';

class Cat extends React.Component {
  render () {
    const { mouse } = this.props;
    return <div
      style={{ width: '100px', height: '100px', background: '#f00', position: 'absolute', left: mouse.x, top: mouse.y }}>
    </div>;
  }
}

export default Cat;
