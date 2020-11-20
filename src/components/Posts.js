import React, { Component } from 'react';
import { Button,Form,ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';

class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             postId:'',
             title:'',
             body:'',
             category:'drama',
             flag:false,
        }
    }
    
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    onSelect=(e)=>{
        this.setState({
            category:e.target.value,
        })
    }

    onClick(e){
        e.preventDefault();
        const data={
            postId:uuidv4(),
            title:this.state.title,
            body:this.state.body,
            category:this.state.category,
        }

        this.props.dispatch({
            type:'ADD_POST',
            payload:data,
        })
        this.setState({
             postId:'',
             title:'',
             body:'',
             category:'drama',
        })
    }

    onEdit=(e,list)=>{
        e.preventDefault();
        //console.log(list);
        this.props.dispatch({
            type:'EDIT_POST',
            payload:list,
        })
        this.setState({
            title:list.title,
            body:list.body,
            category:list.category,
            flag:true,
        })
    }

    onUpdate=(e)=>{
        e.preventDefault();
        this.props.dispatch({
            type:"UPDATE_POST",
            payload:{
                title:this.state.title,
                body:this.state.body,
                category:this.state.category,
            }
        })

        this.setState({
            flag:false,
            title:'',
            body:'',
            category:'drama',
        })
    }

    onDelete=(e,i)=>{
        e.preventDefault();
        this.props.dispatch({
            type:'DELETE_POST',
            id:i,
        })
    }
    render() {
        return (
            <div>
                <Form className="form-style">
                    <h1>{this.state.flag ? "UPDATE POST": "ADD POST"}</h1>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter title" 
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Body</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter message" 
                            name="body"
                            value={this.state.body}
                            onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" value={this.state.category} onChange={this.onSelect}>
                            <option value="education">Education</option>
                            <option value="drama">Drama</option>
                            <option value="other">Other</option>
                        </Form.Control>
                    </Form.Group>
                    
                    {
                        this.state.flag ? (
                        <Button variant="primary" onClick={(e)=>{this.onUpdate(e)}}>
                            Update Post
                        </Button>
                    ):(
                        <Button variant="primary" onClick={(e)=>{this.onClick(e)}}>
                            Add Post
                        </Button>
                    )
                    }
                    
                </Form>
                <>
                {
                    this.props.posts.map((list,i)=>(
                        <ListGroup as="ul" key={list.postId} className="lists-style">
                            <ListGroup.Item as="li" active>
                                <b>Title :</b> {list.title}
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <b>Body :</b> {list.body}
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <b>Category :</b> {list.category}
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Button 
                                    variant="warning" 
                                    className="list-btn-style"
                                    onClick={(e)=>{
                                        this.onEdit(e,list)
                                    }}>
                                    Edit
                                    </Button>
                                <Button 
                                    className="list-btn-style"
                                    variant="danger"
                                    onClick={(e)=>{
                                        this.onDelete(e,i)
                                    }}>
                                    Delete</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    ))
                }
                </>
            </div>
        )
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        dispatch,
    }
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
