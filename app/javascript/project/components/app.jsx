import React from 'react';
import StageList from '../containers/stage_list';
import CheckLists from '../containers/check_lists';

const App = (props) => {
  return (
    <div>
      <StageList />
      <CheckLists />
    </div>
  );
};

export default App;
