import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

/**
 * @jest-environment node
 */

describe('Pruebas en useFetch', () => {

    test('#01 - Debe de retornar la información por defecto', () => {

        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        const { data, loading, error } = result.current;
        
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    })

    test('#02 - Debe de tener la información deseada, loading false, error null', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        
        await waitForNextUpdate({ timeout: 5000 });

        const { data, loading, error } = result.current;

        expect(data.length).toBeGreaterThan(0);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    })

    test('#03 - Debe de manejar el error', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://regres.in/apid/users?page=2'));
        
        await waitForNextUpdate({ timeout: 5000 });

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
    })
})