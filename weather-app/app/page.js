"use client";
import Image from "next/image";
import Layout from "@components/Layout";
import Dayer from "@components/Date";
import React, { useState, useEffect } from 'react';
import LoadingScreen from '@components/loading';
import  GridLayout from "@components/Bento";
import {useFetchData} from "@components/calculations"; 

export default function Home() {
    const { data, isLoading, error, fetchData } = useFetchData();
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = () => {
            fetchData(process.env.API_LINK);
        };
        // Fetch immediately on component mount
        fetchWeatherData();
        // Set up interval to fetch every 1 second
        const intervalId = setInterval(fetchWeatherData, 15*60*1000);
        // Clean up function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Add fetchData to the dependency array

    useEffect(() => {
        if (data) {
            setWeatherData({
                condition: data.current.condition.text,
                feelsLike: data.current.feelslike_c,
                location: data.location.name,
                country: data.location.country,
                humidity: data.current.humidity,
                windSpeed: data.current.wind_kph,
                temperature: data.current.temp_c,
                heatIndex: data.current.heatindex_c,
                windDirection: data.current.wind_dir,
                lastUpdated: data.current.last_updated
            });
            console.log(data);
        }
    }, [data]);

    
    
    


    return ( 
    <Layout > 
    { isLoading && < LoadingScreen / > } 
    <Dayer />
    {weatherData && (
                <GridLayout
                    condition={weatherData.condition}
                    feelsLike={weatherData.feelsLike}
                    location={weatherData.location}
                    country={weatherData.country}
                    humidity={weatherData.humidity}
                    windSpeed={weatherData.windSpeed}
                    temperature={weatherData.temperature}
                    heatIndex={weatherData.heatIndex}
                    windDirection={weatherData.windDirection}
                    lastUpdated={weatherData.lastUpdated}
                />
            )}
    </Layout>
    );
}