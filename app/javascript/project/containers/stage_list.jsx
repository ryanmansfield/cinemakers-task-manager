/* eslint no-bitwise:off */

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectStage, fetchChecklists } from '../actions/index';

class StageList extends Component {
  componentDidUpdate(nextProps) {
    if (nextProps.selectedStage !== this.props.selectedStage) {
      this.props.fetchChecklists(nextProps.selectedStage);
    }
  }

  handleClick = (stage) => {
    this.props.selectStage(stage);
    this.props.fetchChecklists(stage);
  }

  renderStage = (stage) => {
    return (
      <li
        key={stage.id}
        className={stage === this.props.selectedStage ? 'active' : null }
        onClick={() => this.handleClick(stage)}>

          {stage.name}


      </li>
    )
  }

  render() {
    return (
      // console.log(this.props.stages,
      <div className="stages-container">
        <span>STAGELIST</span>
        <ul>
          {this.props.stages.map(this.renderStage)}
        </ul>
      </div>

    );
  }
}


function mapStateToProps(state) {
  return {
    stages: state.stages,
    selectedStage: state.selectedStage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectStage, fetchChecklists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StageList);
