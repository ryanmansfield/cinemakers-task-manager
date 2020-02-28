/* eslint no-bitwise:off */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectStage } from '../actions/index';

class StageList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedStage !== this.props.selectedStage) {
      this.props.fetchChecklists(nextProps.selectedStage);
    }
  }

  handleClick = (stage) => {
    this.props.selectStage(stage);
    // this.props.fetchChecklists(stage);
  }

  renderStage = (stage) => {
    return (
      <li
        key={stage}
        className={stage === this.props.selectedStage ? 'active' : null }
        onClick={() => this.handleClick(stage)}>
        <Link
          to={`/projects/3`}>
          {stage}
        </Link>
      </li>
    )
  }

  render() {
      console.log(this.props.selectedStage)
    return (
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
    stages: state.stages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectStage }, dispatch);
}

// export default StageList;
// export default connect(mapStateToProps)(StageList);
export default connect(mapStateToProps, mapDispatchToProps)(StageList);
