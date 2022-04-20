import React from 'react';
import { shallow} from 'enzyme';
import { GifExpertApp } from '../../components/GifExpertApp';

describe('Prueba de <GifExpertApp />', () => {
    test('Debe de mostrar el componente', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['cat', 'dog'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
});