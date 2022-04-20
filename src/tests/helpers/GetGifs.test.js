import { getGifs } from "../../helpers/GetGifs"

describe('Pruebas al helper-GetGifs', ( ) => {

    // beforeEach() => {
    //     gifs =a
    // }


    test('Debe de traer 10 elementos', async() => {

        const gifs = await getGifs('cat');

        // console.log(gifs.length )
       
        expect(gifs.length).toBe(10)
        
    });

    test('Debe de devolver un array vacio si se pasa "" como argumentos', async() => {

        const gifs = await getGifs("");

        console.log(gifs )
       
        expect(gifs).toEqual([])
        
    });
    
});