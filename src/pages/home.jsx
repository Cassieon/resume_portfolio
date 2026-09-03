import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import DropDownForm from '../components/dropDownForm'
import ResumeViewer from './resume'
import Projects from './projects'
import background from '/src/assets/jensenartofficial-background-7625669.jpg'

export function Home() {
    return (
        <MDBContainer className='mt-5'>
            <center>
                <MDBRow className='mb-1'>
                    <MDBCol center md='8'>
                        <h1>About</h1>
                        This is all about me
                    </MDBCol>
                    <MDBCol size='3' md='4'>
                    <img src="src/assets/05F2692C-611A-46D8-9BE8-05F24A7989E5_1_105_c.jpeg" className='img-thumbnail'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mb-1'>
                    <MDBCol>
                        <MDBBtn outline rounded className='mx-2' color='secondary'>
                            <Link to="/resume">Resume</Link>
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn outline rounded className='mx-2' color='secondary'>
                            <Link to="/projects">Projects</Link>
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>
                        <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>   
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        < DropDownForm />
                    </MDBCol>
                </MDBRow>
            </center>
		</MDBContainer>
	);
}
