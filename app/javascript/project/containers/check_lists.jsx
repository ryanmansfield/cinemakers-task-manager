/* eslint no-bitwise:off */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchChecklists } from '../actions/index';
import CheckList from './check_list';
import CheckListForm from './check_list_form';


class CheckLists extends Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {
    this.fetchChecklists();
    // this.refresher =setInterval(this.fetchChecklists, 3000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.checklists !== prevProps.checklists) {
      this.setState({ isHidden: true });
      // this.fetchChecklists();
    }
  }

  componentWillUnmount () {
    // clearInterval(this.refresher);
  }

  fetchChecklists = () => {
    this.props.fetchChecklists(this.props.selectedStage);
  }

  render() {
    return (
      <div className="checklists-container">
        <div className="checklist-form">
          <button className="checklist-button" onClick={this.toggleHidden.bind(this)} >
            <i className="fas fa-plus-circle"></i>
          </button>
          {!this.state.isHidden && <CheckListForm selectedStage={this.props.selectedStage} />}
        </div>
        <div className="checklist-container" >
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
