import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/theme-context';

class ClassComp extends React.Component {
  constructor (props) {
    console.log('constructor');
    super(props);
    this.state = {
      msg: Date.now(),
    };
  }

  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return null;
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    return null;
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  updateMsg = () => {
    // this.state.msg = Date.now();
    this.setState({ msg: Date.now() });
  };

  // componentWillMount () {
  // 过时的api, 会触发报错
  //   console.log('componentWillMount');
  // }

  render () {
    console.log('render');
    return <div className="class-comp">
      <ThemeContext.Consumer>
        {params => <div>
          <h2>ClassComp</h2>
          <div>{this.props.age}</div>
          <div>{this.state.msg}</div>
          <div>{JSON.stringify(params)}</div>
          <button onClick={this.updateMsg}>updateMsg</button>
        </div>}
      </ThemeContext.Consumer>
    </div>;
  }
}

// 验证props数据
ClassComp.propTypes = {
  // age为字符串
  age: PropTypes.string,
};

export default ClassComp;
