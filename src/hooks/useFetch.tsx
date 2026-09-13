import { useEffect, useState } from "react";

function useFetch<T>(url: string): {data: T | null, isLoading: boolean, error: string | null}{
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)
    async function fetchData(url:string){
        try{
            setLoading(true);
            setError(null);

            const response = await fetch(url);
            if(!response.ok){
                throw new Error (`HTTP Error occured, status: ${response.status}`)
            }
            const data: T = await response.json();
            setData(data)

        }catch(error: unknown){
            if(error instanceof Error){
                setError(error.message);
            }else{
                setError("Unknown error occured")
            }
        }finally{
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        fetchData(url)
    },[url])

    return {data, isLoading, error}
}
export default useFetch;