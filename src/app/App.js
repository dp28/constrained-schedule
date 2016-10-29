import React from 'react';

import ConstrainedEvent from '../constrained-event/constrained-event';
import state from '../state/example';
import './App.css';


const App = () => (
  <div className="App">
    <ConstrainedEvent
      event={state.constrainedEvents[0]}
      minutesPerUnit={state.eventContext.minutesPerUnit}
    />
  </div>
);

export default App;
