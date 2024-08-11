"use client";
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import "@styles/Loading.css";

const LoadingScreen = () => {
  useEffect(() => {
    const countUp = () => {
      let counterElement = document.querySelector('.counter');
      let currentCount = 0;

      function updateCounter() {
        if (currentCount === 100) {
          return;
        }

        currentCount += Math.floor(Math.random() * 10) + 1;

        if (currentCount > 100) {
          currentCount = 100;
        }

        counterElement.innerText = currentCount;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    countUp();

    const StartLoader = () => {
      gsap.to(".counter", 0.25, {
        delay: 3.5,
        opacity: 0,
      });

      gsap.to(".bar", 1.5, {
        delay: 3.9,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      });

      gsap.to(".loading-text", 1.5, {
        delay: 3.9,
        opacity: 0,
        ease: "power4.inOut",
      });

      // Add the loading animation here
      const loadingText = document.querySelector('.loading-text');

      function animateLoadingText() {
        let text = "{Loading.}";
        let index = 0;

        const interval = setInterval(() => {
          switch (index) {
            case 0:
              text = "{Loading.}";
              break;
            case 1:
              text = "{Loading..}";
              break;
            case 2:
              text = "{Loading...}";
              break;
            default:
              index = -1;
          }
          loadingText.textContent = text;
          index++;
          if (index > 2) {
            index = 0;
          }
        }, 333);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
      }

      animateLoadingText();
    };

    StartLoader();
  }, []);

  return (
    <>
      <h1 className='counter'>0</h1>
      <div className="overlay">
        <span className="loading-text">{"{Loading...}"}</span>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </>
  );
};

export default LoadingScreen;
