import React, {useState} from 'react'
import { 
  MDBDropdown, 
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBInput, 
  MDBBtn 
} from 'mdb-react-ui-kit'

export default function DropDownForm() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email)
    }
    return (
        <MDBDropdown>
            <MDBDropdownToggle color="primary" type="button">
                Get in touch
            </MDBDropdownToggle>
            <MDBDropdownMenu className='p-4' style={{ minWidth: '300px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <MDBInput
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
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