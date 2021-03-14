
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    const handleInputChange = ({ target }) => {

    };

    return (
        <div>
            <h1>LoginScreen</h1>    
            <hr/>
            
            <input 
                type="text" 
                name="usuario"
                className="form-control" 
                placeholder="Usuário" 
                onChange={ handleInputChange }
            />

            <input 
                type="password" 
                name="senha"
                className="form-control" 
                placeholder="Senha" 
                onChange={ handleInputChange }
            />

            <button 
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 2,
                    name: 'Airton'
                }) }
            >
                Login
            </button>
            
        </div>
    );
}