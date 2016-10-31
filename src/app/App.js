import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import ConstrainedEventList from '../constrained-event/ConstrainedEventList';
import './App.css';

export const App = ({ events }) => (
  <div className="App">
    <Grid>
      <Row>
        <Col xs={12} sm={8}>
          <ConstrainedEventList events={events} />
        </Col>
      </Row>
    </Grid>
  </div>
);

const mapStateToProps = state => {
  return { events: state.constrainedEvents };
};

export default connect(mapStateToProps)(App);
