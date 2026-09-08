import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import DropDownForm from '../components/dropDownForm'
import ResumeViewer from './resume'
import Projects from './projects'
import background from '/src/assets/jensenartofficial-background-7625669.jpg'

export function Home() {
    return (
        <MDBContainer fluid>
            <center>
                {/* <div className="d-flex align-items-start bg-body-tertiary mb-3" style={{ height: "100px" }}> */}
                <MDBRow>
                    <MDBCol md='8'>
                        <div className='pb-3'>
                            About
                                This is all about me
                        </div>
                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBBtn outline rounded className='mx-2' color='secondary'>
                                    <Link to="/resume">Resume</Link>
                                </MDBBtn>
                                <MDBBtn outline rounded className='mx-2' color='secondary'>
                                    <Link to="/projects">Projects</Link>
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='6'>
                                < DropDownForm />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBCol>
                            <img src="src/assets/05F2692C-611A-46D8-9BE8-05F24A7989E5_1_105_c.jpeg" className='img-thumbnail'/>
                        </MDBCol>
                    </MDBCol>

                </MDBRow>
            </center>
		</MDBContainer>
	);
}
