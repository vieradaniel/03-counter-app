import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en funciones de heroes',()=>{

    test('debe de retornar un heroe por id',()=>{

        const id= 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find(h => h.id);

        expect( heroe ).toEqual(heroeData);

    })

    test('debe de retornar undefined si el heroe no existe',()=>{

        const id= 10;
        const heroe = getHeroeById( id );

        

        expect( heroe ).toBe(undefined);

    })

    //debe de retornar un arreglo con los heroes de DC
    //owner
    // toEqual al arreglo filtrado

    test('debe de retornar un arreglo con los heroes de DC',()=>{

        const owner= 'DC';
        const heroes = getHeroesByOwner(owner);
        
        console.log( heroes);
        const ownerData = heroes.filter(h => h.owner === owner);
        
        expect( heroes ).toEqual(ownerData);

    })


    //debe de retornar un arreglo con los heroes de marvel
    // length =2 // toBe

    test('debe de retornar un arreglo con los heroes de marvel',()=>{

        const owner= 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        
        
        
        expect( heroes.length ).toBe(2);

    })


})