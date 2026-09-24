import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import DropDownForm from '../components/dropDownForm'
import ResumeViewer from './resume'
import Projects from './projects'
import '../styles/pageStyle.scss'
import background from '/src/assets/jensenartofficial-background-7625669.jpg'

export function Home() {
    return (
        <MDBContainer className='centered_container'>
                {/* <div className="d-flex align-items-start bg-body-tertiary mb-3" style={{ height: "100px" }}> */}
                <MDBRow>
                    <MDBCol size='6'>
                        <div className='about_text'>
                                Motivated Python Backend Engineer with production level experience across the full software
                            development lifecycle including development, deployment, and production support via ServiceNow.
                            Strong experience designing, querying, and optimizing relational databases to support scalable
                            backend systems. Hands on Frontend experience across TypeScript, JavaScript, Angular, and React.
                            Proven track record designing and implementing RESTful APIs to support scalable, maintainable 
                            applications. Extensive experience working with Large Language Models including prompt engineering
                            and building custom skills to extend AI-driven functionality. Debugging capabilities paired with 
                            excellent communication skills enabling effective collaboration across cross functional teams.
                          
                        </div>
                        <MDBRow>
                            <MDBCol size='6'>
                                <MDBBtn outline rounded className='mx-2' color='white'>
                                    <Link to="/resume">Resume</Link>
                                </MDBBtn>
                                <MDBBtn outline rounded className='mx-2' color='white'>
                                    <Link to="/projects">Projects</Link>
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                < DropDownForm />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <img src="src/assets/05F2692C-611A-46D8-9BE8-05F24A7989E5_1_105_c.jpeg" className='img-thumbnail'/>
                    </MDBCol>
                </MDBRow>
		</MDBContainer>
	);
}
