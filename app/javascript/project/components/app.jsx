import React from 'react';
import StageList from '../containers/stage_list';
import CheckLists from '../containers/check_lists';
import Dashboard from '../containers/dashboard';

// const App = (props) => {
//   return (
//     <div>
//       <StageList selectedStage={props.match.params.stage}/>
//       <CheckLists selectedStage={props.match.params.stage}/>
//     </div>
//   );
// };

const App = (props) => {
  return (
    <div>
      <StageList />
      <CheckLists />
    </div>
  );
};

export default App;


// import React from 'react';
// import ChannelList from '../containers/channel_list';
// import MessageList from '../containers/message_list';



// const App = (props) => {
//   return (
//     <div className="messaging-wrapper">
//       <div className="logo-container">
//        {* <img className="messaging-logo" src="../../../app/assets/images/logo.png" alt="logo" />}
//       </div>
//         <ChannelList selectedChannel={props.match.params.channel} />
//         <MessageList selectedChannel={props.match.params.channel} />
//     </div>
//   );
// };

// export default App;
