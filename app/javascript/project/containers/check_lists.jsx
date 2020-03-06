/* eslint no-bitwise:off */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchChecklists } from '../actions/index';
import CheckList from './check_list';
// import CheckList from '../components/check_list';
import CheckListForm from './check_list_form';


class CheckLists extends Component {
  componentDidMount() {
    this.fetchChecklists();
  }

  fetchChecklists = () => {
    this.props.fetchChecklists(this.props.selectedStage);
  }

  render() {
    return (
      // console.log(`checklist: ${this.props.checklists}`),
      console.log('hi from checklists container'),

      <div className="checklists-container">
        <span>Checklists Container for #{this.props.selectedStage.name}</span>
        <div className="checklist-form">
          <CheckListForm selectedStage={this.props.selectedStage} />
        </div>
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
    selectedStage: state.selectedStage,
    // checklist: state.checklist
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchChecklists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckLists);
