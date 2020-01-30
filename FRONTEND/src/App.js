import React from 'react';
import { Route } from 'react-router-dom';
import Main from './page/Main';

const App = () => {
  return (
    <div>
      <Route path="/" component={Main} exact />
    </div>
  );
};

export default App;
