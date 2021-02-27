import React from 'react';
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {
    

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = e => {

        e.preventDefault();

        if (description.trim().length <= 1) return;

        handleAddTodo({
            id: new Date().getTime(),
            desc: description,
            done: false
        });

        reset();
    };

    return (
        <React.Fragment>

               <h4>Agregar TODO</h4>

                <hr />

                <form onSubmit={ handleSubmit }>
                    <input 
                        type="text"
                        name="description" 
                        className="form-control"
                        placeholder="Aprender..." 
                        autoComplete="off"
                        onChange={ handleInputChange }
                        value={ description }
                    />

                    <button 
                        type="submit"
                        className="btn btn-outline-primary btn-block mt-1">
                        Agregar
                    </button>

                </form> 

        </React.Fragment>
    );
}

export default TodoAdd;
