
import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const [user, setUser] = useState({
        id: 1,
        name: 'Airton Lima',
        email: 'jose.airtonlimajr@hotmail.com'
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>

            <AppRouter />

        </UserContext.Provider>
    );
}