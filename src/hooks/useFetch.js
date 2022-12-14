import {useEffect, useState} from "react";

function useFetch(murl, method='GET') {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(murl, {
            method: method,
            signal: abortCont.signal
        })
            .then(res=>{
                if (!res.ok){
                   throw Error(`Something went wrong with fetch: ${murl}`);
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err)=>{
                if (err.name === 'AbortError'){
                    console.log('Fetch aborted')
                } else {
                    setError(err);
                    setIsPending(false);
                }
            })
        return () => abortCont.abort();
        // eslint-disable-next-line
    }, [murl])
    return {data, isPending, error}
}

export default useFetch;