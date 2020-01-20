import React from 'react';
import { Route } from 'react-router-dom';
import AdPage from './page/Main';
import DetailPage from './page/DetailPage';

const App = () => {
  return (
    <div>
      <Route path="/" component={AdPage} exact />
      <Route path="/detail/:id" component={DetailPage} />
    </div>
  );
};

export default App;
