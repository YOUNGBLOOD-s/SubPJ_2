import React from 'react';
import { Route } from 'react-router-dom';
import Main from './page/Main';
// import Chat from './page/Chat';

const App = () => {
  return (
    <div>
      <Route path="/" component={Main} exact />
      {/* <Route path="/chat" component={Chat} /> */}
    </div>
  );
};

export default App;
