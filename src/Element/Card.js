import React, {useReducer} from 'react';

function Card(props){

    const initialCount = {count: 0};


    function countReducer(state, action){
        switch(action.type){
            case('increment'):
                return {count: state.count + 1};
            case('decrement'):
                return {count: state.count - 1};    
            default:
                return 
    
        }
    }

    const [state, dispatch] = useReducer(countReducer, initialCount)



    return(<div>
        <p>{state.count}</p>
        <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
        <button onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
    </div>
    )
}

export default Card;