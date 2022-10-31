

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './stylee.css'
import { Link } from 'react-router-dom';


const Daftar = () => {
    return (
        <>
            <div className='daftar col-12 col-lg-4 login-card mt-2  hv-center shadow'>
                <Form >
                    <h1 ><u>Register</u></h1>
                    <Form.Group className="mb-3" size='lg' controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Saya Setuju" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>

    );

}

export default Daftar;