import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('pruebas 05-funciones',()=>{

test('getUser debe de retornar un objeto', ()=>{

    const userTest = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual( userTest );


})

// getUsuario activo debe retornar un objeto
    
test("getUsuario debe retornar un objeto y pasar su argumento",()=>{

    const nombre = "daniel";
    const usuarioActivoTest= getUsuarioActivo(nombre);

    const usuarioActivo = {
        uid: 'ABC567',
        username: nombre,
    }

    expect(usuarioActivoTest).toEqual(usuarioActivo);

})

})