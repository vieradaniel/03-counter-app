import { getSaludo } from "../../base/02-template-string";

import "@testing-library/jest-dom"


describe(' pruebas en 02-template-string.js',()=>{

    test('getSaludo debe retornar hola daniel',()=>{

        const nombre = "daniel";
        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola " + nombre)
    })

    // getSaludo debe de retornar Hola Carlos si no hay argumento nombre
    test('getSaludo debe retornar hola Carlos si no se pasa argumento',()=>{

       
        const saludo = getSaludo();

        expect(saludo).toBe("Hola Carlos");
    })

})