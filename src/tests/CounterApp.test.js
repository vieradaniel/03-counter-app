import { shallow } from "enzyme"
import CounterApp from "../CounterApp"
import React from 'react';

import'@testing-library/jest-dom';

let wrapper= shallow(<CounterApp  />);

beforeEach(()=>{

    wrapper = shallow(<CounterApp  />);

})

describe('<CounterApp /> ',()=>{

    test('CounterApp se debe mostrar correctamente',()=>{

        

        expect(wrapper).toMatchSnapshot();

    });
    test('CounterApp debe mostrar el valor por defecto de 100',()=>{

        
        
        const wrapper = shallow(
            <CounterApp 
                value = { 100 } 
            />
        );

        const valueText = wrapper.find('h2').text();
        expect(valueText).toBe('100');

    })

    test('debe de incrementar con el boton +1',()=>{

        const btn1 = wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');
    })

    test('debe de decrementar con el boton -1',()=>{

        const btn1 = wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');
    })

    test('debe de colocar el valor por defecto con btn reset',()=>{

        const wrapper = shallow(
            <CounterApp 
                value = { 105 } 
            />
        );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        
        
        expect(counterText).toBe('105');
    })


})