import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import ConstrainedEventList from '../constrained-event/ConstrainedEventList';
import state from '../state/example';
import './App.css';

const App = () => (
  <div className="App">
    <Grid>
      <Row>
        <Col xs={12} sm={8}>
          <ConstrainedEventList
            events={state.constrainedEvents}
            minutesPerUnit={state.eventContext.minutesPerUnit}
          />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;
