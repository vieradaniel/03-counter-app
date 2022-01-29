import React from 'react';

import'@testing-library/jest-dom'
import { shallow, ShallowWrapper } from 'enzyme';
import  PrimeraApp  from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />',()=>{

    test('debe de mostrar <PrimeraApp /> correctamente',()=>{
        const saludo = "hola, soy goku";
        const wrapper = shallow(<PrimeraApp saludo = "hello" />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = "hola, soy goku";
        const subtitulo= "soy un subtitulo";
        const wrapper = shallow(
            <PrimeraApp 
                saludo = {saludo} 
                subtitulo = {subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe( subtitulo );
    });
    

})