import { getImagen } from "../../base/11-async-await"

describe('pruebas con asyn-await y fetch',()=>{

    test('debe retornar url de la imagen',async ()=>{

        const url = await getImagen();
        

        expect(typeof url).toBe('string');



    })
})