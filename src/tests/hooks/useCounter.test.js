import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {

    test('#01 - Debe de retornar valores por defecto', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('#02 - Debe de tener el counter en 100', () => {

        const { result } = renderHook(() => useCounter(100));

        expect(result.current.state).toBe(100);
    });

    test('#03 - Debe de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100))

        const { increment } = result.current

        act(() => increment())

        const { state } = result.current

        expect(state).toBe(101);
    });

    test('#04 - Debe de decrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));

        const { decrement } = result.current

        act(() => decrement())

        const { state } = result.current

        expect(state).toBe(99)
    });

    test('#05 - Debe de estabeler el valor en 100', () => {

        const { result } = renderHook(() => useCounter(100))

        const { decrement, reset } = result.current

        act(() => {
            decrement()
            reset()
        })

        const { state } = result.current

        expect(state).toBe(100)
    });
});