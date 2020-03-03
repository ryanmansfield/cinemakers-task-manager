/* eslint no-bitwise:off */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchChecklists } from '../actions/index';
import CheckList from '../components/check_list';


class CheckLists extends Component {
  componentDidMount() {
    this.fetchChecklists();
  }

  fetchChecklists = () => {
    this.props.fetchChecklists(this.props.selectedStage);
  }

  // render() {
  //   return (
  //     <div className="checklist-container">
  //       <span>Stage #{this.props.selectedStage}</span>
  //       <h1>CHECKLISTS CONTAINER</h1>
  //       <CheckList />
  //     </div>
  //   );
  // }

  render() {
    return (
      console.log(this.props.checklists),
      <div className="checklists-container">
        <span>Checklist's Container for #{this.props.selectedStage}</span>
        <div className="checklists-content" >
          {
            this.props.checklists.map((checklist) => {
              return <Checklist key={checklist.id} checklist={checklist} />;
            })
          }
        </div>
      </div>
    );
  }
}

// export default CheckLists;

function mapStateToProps (state) {
  return {
    checklists: state.checklists,
    selectedStage: state.selectedStage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchChecklists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckLists);
