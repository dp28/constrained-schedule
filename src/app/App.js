import React from 'react';

import ConstrainedEventList from '../constrained-event-list/constrained-event-list';
import state from '../state/example';
import './App.css';

const App = () => (
  <div className="App">
    <ConstrainedEventList
      events={state.constrainedEvents}
      minutesPerUnit={state.eventContext.minutesPerUnit}
    />
  </div>
);

export default App;
