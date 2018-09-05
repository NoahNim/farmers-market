
import React from 'react';
import MarketSchedule from ',/MarketSchedule'
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={MarketSchedule} />
      </Switch>
    </div>
  );
}

export default App;
