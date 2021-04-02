import React from 'react';
import { shallow } from "enzyme";
import { HookApp } from '../HooksApp';

describe('Pruebas en <HookApp />', () => {

    test('#01 - Debe de mostrarse correctamente', () => {

        const wrapper = shallow( <HookApp /> );
        expect(wrapper).toMatchSnapshot();
    });

    
});