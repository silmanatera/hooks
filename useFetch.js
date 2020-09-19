import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {

    let isMounted = useRef(true);


    const [state, setState] = useState({ data: null, loading: true, error: null });

    // para que cargue una sola vez. Evita memory leak
    useEffect(() => {
        return () => { // cuando se desmonta el componente
            isMounted.current = false;
            // Se refiere a que desaparece del DOM de la página, no existe.
        }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json()) // convierte la respuesta en un json
            .then(data => {
                if (isMounted.current) {
                    setTimeout(() => {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }, 4000)
                }
            })
    }, [url]); // cambia cuando cambie la url

    return state;
}