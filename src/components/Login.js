import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
        }
    }
    
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    onClick(e){
        e.preventDefault();
        const {email,password}=this.state;
        let data=JSON.parse(localStorage.getItem("user-data"));
        //console.log(data);
        if(email===data.email && password===data.password){
            this.props.history.push('/post');
        }
        else{
            alert("email or password may be wrong");
        }
        this.setState({
            email:'',
            password:'',
        })
        
    }
    render() {
        return (
            <div>
                <Form className="form-style">
                    <h1>Login Page</h1>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.onChange}/>
                    </Form.Group>
                
                    <Button variant="primary" onClick={(e)=>{this.onClick(e)}}>
                        Login
                    </Button>
                    <br/>

                    <a href="/signup" className="link-style">Create account</a>
                </Form>
            </div>
        )
    }
};

export default Login;
