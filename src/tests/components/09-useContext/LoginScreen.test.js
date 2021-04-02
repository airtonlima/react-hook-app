import React from 'react';
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen'

describe('Pruebas en <LoginScreen />', () => {
    
    const setUser = jest.fn()

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('#01 - Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    });

    test('#02 - Debe de ejecutar el setUser con el argumento esperado', () => {

        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id: 2, 
            name: 'Airton'
        });
    })
    
});
