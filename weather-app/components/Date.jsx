"use client";
import React from 'react'
import {Playfair_Display} from "next/font/google";
import { useEffect, useState } from 'react';
import '@styles/Date.css'


const playfair = Playfair_Display({ subsets: ["latin"] , weight:['600']});


const Dayer = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days =[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
var date = new Date();
  function pickData() {
    
    useEffect(() => {
      const timer = setInterval(() => {
          date = new Date();
      }, 1000000);
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(timer);
    }, []);
  }
  pickData();

 const day = days[date.getDay()];
 const dateNum = date.getDate();
 const year = date.getFullYear();
 const month=months[date.getMonth()];
  return (
    <div>
    <h1
      className={
        playfair.className +
        "  bg-gradient-to-bl from-blue-600 to-blue-300 bg-clip-text text-transparent leading-normal text-5xl text-center font-bold  sm:text-xs  tracking-tighter md:text-4xl "
      }
      style={{
        position: "absolute",
        top: "8px",
        left: "50%",
        transform: "translate(-50%, 0%)",
      }}
    >
      {day + " " + month + " " + dateNum + " " + year}
    </h1>
    </div>
  );
};

export default Dayer ;
