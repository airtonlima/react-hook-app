import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {

    const { state:counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    // ejecuta después que DOM se ha cargado completamente.
    useLayoutEffect(() => {

        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [quote]);

    return (
        <>
            <h1>Layout Effect</h1>
            <hr/>
            <br/>
     
            <blockquote className="blockquote text-right">
                <p className="mb-10" ref={ pTag }>{ quote || '' }</p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>
         
            <button className="btn btn-primary m-10" onClick={ () => increment(1) }>
                Siguiente quote
            </button>
        </>
    );
}