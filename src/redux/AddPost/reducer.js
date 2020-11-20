import {ADD_POST,DELETE_POST, EDIT_POST, UPDATE_POST} from './type';

const initialState={
    posts:[],
    list:'',
}

const projectReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST:
            return Object.assign({},state,{
                posts:state.posts.concat(action.payload),
            });

        case EDIT_POST:
            return{
                ...state,
                list:action.payload,
            }

        case UPDATE_POST:
            var posts=state.posts.map((list)=>{
                if(list.postId===state.list.postId){
                    return{
                        ...list,
                        title:action.payload.title,
                        body:action.payload.body,
                        category:action.payload.category,
                    }
                }
                else{
                    return list;
                }
            })
            return{
                posts:posts
            }

        case DELETE_POST:
            return{
                ...state,
                posts:state.posts.filter((list,i)=> i !== action.id)
            }
        
        default:
            return state;
    }
};

export default projectReducer;