import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Airton',
        email: 'airton.lima@gmail.com'
    };

    test('#01 - Debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm))

        const [ values, handleInputChange, reset ] = result.current;

        expect(result.current.length).toBe(3)
        
        expect(values).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')
    })

    test('#02 - Debe de cambiar el valor de formulario (cambiar name)', () => {

        const { result } = renderHook(() => useForm(initialForm))

        const [ , handleInputChange ] = result.current;

        const target = { name: 'name', value: 'Damaris' };

        act(() => handleInputChange({ target }))

        const [ values ] = result.current

        // expect( values.name ).not.toBe(initialForm.name)
        expect( values ).toEqual({ ...initialForm, name: 'Damaris' })
    })

    test('#03 - Debe de re-estabelecer el formulario con RESET', () => {

        const { result } = renderHook(() => useForm(initialForm))

        const [ , handleInputChange, reset ] = result.current;

        const target = { name: 'name', value: 'Damaris' };

        act(() => {
            handleInputChange({ target })
            reset()
        })

        const [ values ] = result.current

        expect(values).toEqual(initialForm)
    })
})