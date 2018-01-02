import React, { Component } from 'react';
import './App.css'
import Sidebar from './Sidebar'
import ajx from './util/ajax'
import {connect} from 'react-redux'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(ajx.newsfetch)
  }
  render() {
    return (
      <div>
        <Sidebar/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(App)
