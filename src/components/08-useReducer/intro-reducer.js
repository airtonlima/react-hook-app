import { act } from "react-dom/test-utils";

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if (action?.type === 'agregar')
    return [...state, action.payload];

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const action = {
    type: 'agregar',
    payload: newTodo
};

todos = todoReducer(newTodo, action);

console.table(todos);