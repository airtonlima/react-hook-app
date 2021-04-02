import { shallow } from "enzyme"
import { TodoList } from '../../../components/08-useReducer/TodoList'

import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoList 
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        /> 
    )

    test('#01 - Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
    })

    test('#02 - Debe de tener dos <TodoListItem />', () => {

        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length )
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete').toEqual( expect.any(Function) ))
    })
})