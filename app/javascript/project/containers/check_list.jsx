/* eslint no-bitwise:off */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { selectStage, fetchChecklists } from '../actions/index';

class CheckList extends Component {

  render() {
    return (
      <div className="checklist-container">
        <h1>CHECKLIST CONTAINER</h1>
      </div>
    );
  }
}

export default CheckList;
