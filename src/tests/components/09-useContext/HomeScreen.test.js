import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Airton',
        email: 'airton@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
    })

    test('', () => {
        
    })

    test('', () => {
        
    })
})