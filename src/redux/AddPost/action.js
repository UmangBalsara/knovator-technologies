import {ADD_POST,EDIT_POST,UPDATE_POST,DELETE_POST} from './type';

export const addPost=(payload)=>{
    return{
        type:ADD_POST,
        payload:payload,
    }
}

export const editPost=(payload)=>{
    return{
        type:EDIT_POST,
        payload:payload,
    }
}

export const updatePost=(payload)=>{
    return{
        type:UPDATE_POST,
        payload:payload,
    }
}

export const deletePost=(id)=>{
    return{
        type:DELETE_POST,
        id:id,
    }
}

