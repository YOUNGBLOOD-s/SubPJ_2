import React from 'react';
import { Route } from 'react-router-dom';
import Main from './page/Main';
import DetailPage from './page/DetailPage';
import Chat from './page/Chat';

const App = () => {
  return (
    <div>
      <Route path="/" component={Main} exact />
      <Route path="/detail/:id" component={DetailPage} />
      <Route path="/chat" component={Chat} />
    </div>
  );
};

export default App;
