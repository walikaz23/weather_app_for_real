"use client";
import React from 'react'
import { useEffect , useState} from 'react'
import {Bodoni_Moda} from "next/font/google";

const bodoniModa = Bodoni_Moda({ subsets: ['latin'] });

const CurrentTime = () => {
  
  const d = new Date();
  const [currentTime, setCurrentTime] = useState(d.toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);


  return (
    <h2 className={bodoniModa.className}>
      {currentTime} 
    </h2>
  )
}


// Custom hook for fetching data
export function useFetchData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
      return result; // Return the data as a JavaScript object
    } catch (error) {
      setError(error.message);
      return null;
    } finally {
      useEffect(() => {
        // Simulating a loading process
        setTimeout(() => {
            setIsLoading(false);
        }, 6000);
    }, []);

    }
    
  };

 
  return { data, isLoading, error, fetchData};
}

export default CurrentTime

