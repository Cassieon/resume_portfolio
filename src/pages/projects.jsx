import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Projects() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol start>
          One of three columns
        </MDBCol>
        <MDBCol center>
          One of three columns
        </MDBCol>
        <MDBCol end>
          One of three columns
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}