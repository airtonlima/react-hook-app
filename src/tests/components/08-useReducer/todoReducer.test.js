import { todoReducer } from "../../../components/08-useReducer/todoReducer"

import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas em todoReducer', () => {

    test('#01 - Debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {})

        expect( state ).toEqual( demoTodos )
    })

    test('#02 - Debe de agregar un TODO', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const state = todoReducer( demoTodos, { type: 'add', payload: newTodo })

        expect( state.length ).toBe( 3 )
        expect( state ).toEqual([ ...demoTodos, newTodo ])

    })

    test('#03 - Debe de borrar un TODO', () => {

        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer( demoTodos, action )

        expect( state.length ).toBe( 1 )
        expect( state ).toEqual([ demoTodos[1] ] )
    })

    test('#04 - Debe de hacer el TOGGLE del TODO', () => {
        
        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer( demoTodos, action )

        expect( state[0].done ).toBe(true)
        expect( state[1] ).toBe(demoTodos[1])
    })
})