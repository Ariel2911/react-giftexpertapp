import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });
    
    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', { target: { value } });
        
        const p = wrapper.find('p').text().trim();
        
        expect(p).toBe(value);
    });
    
    test('No debe de postear la información con submit', () => {
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'cat';
        
        // Simula un inputChange
        wrapper.find('input').simulate('change', { target: { value } });    
        
        // Simula el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // setCategories debe ser llamdo  
        expect( setCategories ).toHaveBeenCalled();
        // setCategories debe ser llamado y se le debe pasar una función
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ));

        // El valor del input debe de ser ''
        expect( wrapper.find('input').prop('value') ).toBe('');
        
    })

    // test('debe de postear la información con submit', () => {
    //     const input = wrapper.find('input');
    //     const value = 'Cat';

    //     input.simulate('change', { target: { value } })
    //     form.simulate('submit', { preventDefault(){} });

    //     expect(setCategories).toHaveBeenCalled();
    // })
});