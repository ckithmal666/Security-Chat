import React, { Component } from 'react';
import socket from '../Socket';

class Status extends Component {
  state = {
    status: 'info',
    text: 'Connecting...'
  }
  componentDidMount() {
    // Connect
    socket.on('connect', () => {
      this.setState({
        status: 'success',
        text: 'Connection'
      });
    });

    // Connect error
    socket.on('connect_error', (error) => {
      this.setState({
        status: 'danger',
        text: 'fail',
      });
    });
  }
  render() {
    return (
      <small>Status: <span className={"has-text-" + (this.state.status)}>{this.state.text}</span></small>
    );
  }
};

export default Status;