import React from 'react';
import { Route } from 'react-router-dom';
import Main from './page/Main';
import DetailPage from './page/DetailPage';
import NFSlider from './components/common/NFSlider';

const App = () => {
  return (
    <div>
      <Route path="/" component={Main} exact />
      <Route path="/detail/:id" component={DetailPage} />

      {/* test */}
      <Route path="/NFSlider" component={NFSlider} />
    </div>
  );
};

export default App;
