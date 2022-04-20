import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Prueba del componete GifGridItem', () => {
    const title = 'Un Titulo';
    const url = 'http://localhost/algo.jpg';
    let wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe contener', () => {
        const textValue = wrapper.find('p').text().trim();
        
        expect(textValue).toBe(title);
    });

    test('Pruebas de los atributos de img', () => {

        const imgSrc = wrapper.find('img').prop('src');
        console.log(imgSrc) 
        const imgAlt = wrapper.find('img').prop('alt'); 

        expect(imgSrc).toBe(url);
        expect(imgAlt).toBe(title);
    });

    test('Pruebas de los estylos del div', () => {
        const width = '150px';
        const styledDiv = wrapper.find('div').prop('style').width;
        
        expect(styledDiv).toBe(width);
    })

});