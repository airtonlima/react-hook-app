const { shallow } = require("enzyme")


describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={ handleAddTodo }
        />
    )

    test('#01 - Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
    })

    test('#02 - No debe de llamar handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault() {} })

        expect( handleAddTodo ).toHaveBeenCalledTimes(0)

    })

    test('#03 - Debe de llamar handleAddTodo', () => {

        const value = 'Aprender React'

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault() {} })

        expect( handleAddTodo ).toHaveBeenCalledTimes(1)
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) )
        expect( handleAddTodo ).toHaveBeenCalledWith({ 
            id: expect.any(Number),
            desc: value,
            done: false
        })

        expect( wrapper.find('input').prop('value') ).toBe('')
    })

})