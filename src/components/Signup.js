import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
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
        const {username,email,password}=this.state
        const data={
            username:username,
            email:email,
            password:password,
        }

        this.setState({
            username:'',
            email:'',
            password:'',
        })
        localStorage.setItem("user-data",JSON.stringify(data));
        //let data1=JSON.parse(localStorage.getItem("user-data"));
        //console.log(data1);
    }

    render() {
        return (
            <div>
                <Form className="form-style">
                    <h1>Create Account</h1>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter name" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.onChange} />
                    </Form.Group>

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
                        Signup
                    </Button>
                    <br/>

                    <a href="/" className="link-style">Click here to go login page</a>
                </Form>
            </div>
        )
    }
};

export default Signup;
