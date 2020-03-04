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
    this.props.fetchChecklists(this.props.selectedStage.id);
  }

  render() {
    return (
      console.log(`checklist: ${this.props.checklists}`),
      // console.log(`project_id: ${this.props.selectedStage.project_id}`),

      <div className="checklists-container">
        <span>Checklist's Container for #{this.props.selectedStage.name}</span>
        <div >
          {
            this.props.checklists.map((checklist) => {
              return <CheckList key={checklist.id} checklist={checklist} />;
            })
          }
        </div>

      </div>
    );
  }
}

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
