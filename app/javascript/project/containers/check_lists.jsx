/* eslint no-bitwise:off */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { selectStage, fetchChecklists } from '../actions/index';
import CheckList from '../components/check_list';


class CheckLists extends Component {

  render() {
    return (
      <div className="checklist-container">
        <h1>CHECKLISTS CONTAINER</h1>
        <CheckList />
      </div>
    );
  }
}

export default CheckLists;
