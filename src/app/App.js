import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import ConstrainedEventList from '../constrained-event/ConstrainedEventList';
import ConstraintBuilder from '../constraint-builder/ConstraintBuilder';
import ConstraintList from '../constraint/ConstraintList';
import './App.css';

export default App;

export function App() {
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col xs={12} sm={4}>
            <ConstraintBuilder />
          </Col>
          <Col xs={12} sm={4}>
            Constraints:
            <ConstraintList />
          </Col>
          <Col xs={12} sm={8}>
            <ConstrainedEventList />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
