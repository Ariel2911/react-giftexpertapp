import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"


describe('Pruebas en el hooks useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('cat') );        
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('cat') );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        // console.log(data, loading);

        expect(data.length).toBe(10)
        expect(loading).toBe(false);
     })
})