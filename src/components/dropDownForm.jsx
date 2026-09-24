import React, {useState} from 'react'
import { 
  MDBDropdown, 
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBInput, 
  MDBBtn, 
  MDBTextArea,
} from 'mdb-react-ui-kit'

export default function DropDownForm() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email)
    }
    return (
        <MDBDropdown>
            <MDBDropdownToggle outline rounded className='mx-2' color='white' type="button">
                Get in touch
            </MDBDropdownToggle>
            <MDBDropdownMenu outline rounded className='mx-2' color='white'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <MDBInput
                            type="text"
                            label="First and Last name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MDBInput
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MDBTextArea label="Message" id="textAreaExample" rows="{4}" />
                    </div>

                    <MDBBtn type="submit" block>
                        Submit
                    </MDBBtn>

                </form>
                
            </MDBDropdownMenu>
        </MDBDropdown>
        // <div class="dropdown">
        //     <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
        //         Open Form
        //     </button>
        //     <div class="dropdown-menu p-4">
        //         <form>
        //             <div class="mb-3">
        //                 <label class="form-label">Email address</label>
        //                 <input type="email" class="form-control" placeholder="name@example.com"/>
        //             </div>
        //             <div class="mb-3">
        //                 <label class="form-label">Password</label>
        //                 <input type="password" class="form-control" placeholder="Password"/>
        //             </div>
        //             <button type="submit" class="btn btn-primary">Sign in</button>
        //         </form>
        //     </div>
        // </div>
    );
}