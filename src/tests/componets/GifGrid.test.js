import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/Gifgrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas de <GifGrid />', () => {

    const category = 'cat';
    
    test('Debe de mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category} />)
        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('Debe de mostrar items cuando se cargan  imagenes useFetchGifs', () => {

        const gifs =[
            {
            id: 'abc',
            url:'https:/local/cualquiercosa.jpg',
            title: 'Cualquier Cosa'
            },            
            {
            id: 'abd',
            url:'https:/local/cualquiercosa.jpg',
            title: 'Cualquier Cosa'
            },

        ];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    })
});