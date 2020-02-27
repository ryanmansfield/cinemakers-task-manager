/* eslint no-bitwise:off */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { selectStage, fetchChecklists } from '../actions/index';

class StageList extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedStage !== this.props.selectedStage) {
  //     this.props.fetchChecklists(nextProps.selectedStage);
  //   }
  // }

  // handleClick = (stage) => {
  //   this.props.selectStage(stage);
  //   this.props.fetchChecklists(stage);
  // }

  // renderStage = (stage) => {
  //   return (
  //     <li
  //       key={stage}
  //       className={stage === this.props.selectedStage ? 'active' : null}
  //       onClick={() => this.handleClick(stage)}>
  //       <Link
  //         to={`/stages/${stage}`}>
  //         #{stage}
  //       </Link>
  //     </li>
  //   )
  // }

  render() {
    return (
      <h1>STAGELIST</h1>
    );
  }
}

export default StageList;

// function mapStateToProps(state) {
//   return {
//     Stages: state.stages
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectStage, fetchMessages }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(StageList);
