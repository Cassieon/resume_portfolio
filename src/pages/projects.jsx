import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Navbar from '../components/navBar'

export default function Projects() {
  return (
    <MDBContainer>
        <div >
            <Navbar/>
        </div>
      <MDBRow>
        <MDBCol start>
            <MDBBtn href="https://github.com/Cassieon/resume_portfolio/tree/master" target="_blank">
                Portfolio
            </MDBBtn>
        </MDBCol>
        <MDBCol center>
            <MDBBtn href="https://github.com/Cassieon/Magic8_ball/tree/main/magic8_ball" target="_blank">
                Magic 8ball
            </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}