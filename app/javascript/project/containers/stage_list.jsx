/* eslint no-bitwise:off */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectStage, fetchChecklists } from '../actions/index';

class StageList extends Component {

  handleClick = (stage) => {
    this.props.selectStage(stage);
    this.props.fetchChecklists(stage);
  }

  renderStage = (stage) => {
    return (
      <li
        key={stage.id}

        className={stage === this.props.selectedStage ? 'active' : null }
        onClick={() => this.handleClick(stage)}
      >
        <div className="stage">
          <h2>{stage.name}</h2>
        </div>
      </li>
    )
  }

  render() {
    return (
      <div className="stages-container">
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
