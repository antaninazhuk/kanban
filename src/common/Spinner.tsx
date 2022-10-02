import React from 'react';
import { Spinner as BsSpinner, Row, Col } from 'react-bootstrap';

export function Spinner() {
  return (
    <Row>
      <Col>
        <BsSpinner animation="border" />
      </Col>
    </Row>
  )
} 