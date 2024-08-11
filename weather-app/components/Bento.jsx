import React from 'react';
import styles from "@styles/Grid.module.css";
import CurrentTime from './calculations';
import  {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
}from './card'; 
import {Cormorant} from 'next/font/google';


const cityfont = Cormorant({ subsets: ["latin"] , weight:['600']});



const GridLayout = (props) => {
  return (
    <div className={styles.gridContainer}>
      <div className={`${styles.gridItem} ${styles.item1}`}>
        <CurrentTime />
      </div>

     
      <div className={`${styles.gridItem} ${styles.item2}`}>
      {props.location && 
      <div className={`${cityfont.className} text-6xl`}>
      <h2>
      {props.location}
      </h2>
      </div>}
      {props.country && <p>{props.country}</p>}
      </div>


      <div className={`${styles.gridItem} ${styles.item3}`} >
      {props.condition}
      {props.feelsLike&& <p>Feels like: {props.feelsLike}°C</p>}

      </div>


      <div className={`${styles.gridItem} ${styles.item4}`}>

        {props.temperature &&
        <Card  className="bg-gradient-to-r from-slate-600 to-blue-500 sm:p-4 p-2">
        <CardHeader className="sm:pb-2 pb-1">
        <CardTitle className="text-sm sm:text-base flex justify-center items-center"> 
        <div 
        className='sm:h-8 sm:w-8'
        style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: 'auto', // or any specific height
           width: 'auto',  // or any specific width
          }}>
        <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15.9998C11.4477 15.9998 11 16.4475 11 16.9998C11 17.5521 11.4477 17.9998 12 17.9998C12.5523 17.9998 13 17.5521 13 16.9998C13 16.4475 12.5523 15.9998 12 15.9998ZM12 15.9998L12.0071 10.5M12 16.9998L12.0071 17.0069M16 16.9998C16 19.209 14.2091 20.9998 12 20.9998C9.79086 20.9998 8 19.209 8 16.9998C8 15.9854 8.37764 15.0591 9 14.354L9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V14.354C15.6224 15.0591 16 15.9854 16 16.9998Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
         Temperature:</CardTitle>
         </CardHeader>
         <CardContent>
          {props.temperature}°C
         </CardContent>
        </Card>
        }
        

        {props.humidity && 
        <Card className="bg-gradient-to-r from-slate-600 to-blue-500 sm:p-4 p-2" >  
        <CardHeader className="sm:pb-2 pb-1">
          <CardTitle className="text-sm sm:text-base flex justify-center items-center">
          <div  className='sm:h-8 sm:w-8' style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: 'auto', // or any specific height
           width: 'auto',  // or any specific width
          }}>
          <svg width="34px" height="34px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(6.12,6.12), scale(0.49)"><path transform="translate(-2.4, -2.4), scale(1.7999999999999998)" fill="#7ed0ec" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <path d="M19 13.8C19 17.7764 15.866 21 12 21C8.13401 21 5 17.7764 5 13.8C5 12.8452 5.18069 11.9338 5.50883 11.1C6.54726 8.46135 12 3 12 3C12 3 17.4527 8.46135 18.4912 11.1C18.8193 11.9338 19 12.8452 19 13.8Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          
          Humidity:</CardTitle>
 
        </CardHeader>
        <CardContent>
          {props.humidity}%
         </CardContent>
        </Card>
         }


        {props.windSpeed && 
        <Card className="bg-gradient-to-r from-slate-600 to-blue-500 sm:p-4 p-2" >
        <CardHeader className="sm:pb-2 pb-1">
          <CardTitle className="text-sm sm:text-base flex justify-center items-center">
          <div   className='sm:h-8 sm:w-8' style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: 'auto', // or any specific height
           width: 'auto',  // or any specific width
          }}>
          <svg width="34px" height="34px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M30.2972 18.7786C30.2972 18.7786 27.0679 27.8808 25.5334 29.4699C23.9988 31.0591 21.4665 31.1033 19.8774 29.5687C18.2882 28.0341 18.244 25.5018 19.7786 23.9127C21.3132 22.3236 30.2972 18.7786 30.2972 18.7786Z" fill="#2F88FF" stroke="#000000" stroke-width="2.16" stroke-linejoin="round"></path> <path d="M38.8492 38.8492C42.6495 35.049 45 29.799 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 29.799 5.35051 35.049 9.15076 38.8492" stroke="#000000" stroke-width="2.16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M24 4V8" stroke="#000000" stroke-width="2.16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M38.8454 11.1421L35.7368 13.6593" stroke="#000000" stroke-width="2.16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M42.5225 27.2328L38.6251 26.333" stroke="#000000" stroke-width="2.16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.47749 27.2328L9.37497 26.333" stroke="#000000" stroke-width="2.16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.15463 11.1421L12.2632 13.6593" stroke="#000000" stroke-width="2.16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>          </div>
          Wind:</CardTitle>
        </CardHeader>
          <CardContent>
          {props.windSpeed} m/s
         </CardContent>
        </Card>
        }

        {props.windDirection && 
        <Card className="bg-gradient-to-r from-slate-600 to-blue-500 sm:p-4 p-2" >
        <CardHeader className="sm:pb-2 pb-1">
          <CardTitle className="text-sm sm:text-base flex justify-center items-center">
          <div   className='sm:h-8 sm:w-8' style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: 'auto', // or any specific height
           width: 'auto',  // or any specific width
          }}>
        <svg fill="#000000" width="34px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>wind</title> <path d="M13 11.261c0.038 0 0.070-0.018 0.107-0.021 2.849-0.061 5.136-2.386 5.136-5.244 0-2.897-2.348-5.245-5.245-5.245-2.404 0-4.43 1.617-5.050 3.823l-0.009 0.037-0.012 0.025c-0.115 0.411-0.181 0.883-0.182 1.371v0c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0c0-0.254 0.035-0.499 0.099-0.732l-0.005 0.019 0.006-0.012c0.327-1.18 1.391-2.032 2.655-2.032 1.519 0 2.75 1.231 2.75 2.75s-1.231 2.75-2.75 2.75h-0c-0.019 0-0.034 0.010-0.053 0.011l-10.932-0.011c-0 0-0 0-0 0-0.69 0-1.25 0.56-1.25 1.25s0.559 1.25 1.249 1.25l10.985 0.011zM24.469 4.869c-3.106 0.004-5.723 2.093-6.527 4.942l-0.012 0.048-0.013 0.026c-0.149 0.53-0.235 1.139-0.235 1.768 0 0.002 0 0.003 0 0.005v-0c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0c0-0.002 0-0.005 0-0.007 0-0.393 0.054-0.774 0.155-1.135l-0.007 0.030 0.007-0.013c0.509-1.837 2.166-3.163 4.133-3.163 2.364 0 4.281 1.917 4.281 4.281s-1.917 4.281-4.281 4.281v0c-0.026 0-0.047 0.013-0.072 0.015l-20.34-0.020c-0.689 0.003-1.246 0.561-1.246 1.25s0.557 1.247 1.245 1.25l20.413 0.020c0.053-0.008 0.099-0.017 0.144-0.029l-0.008 0.002c3.685-0.073 6.644-3.078 6.644-6.774 0-3.742-3.033-6.775-6.775-6.775-0.002 0-0.004 0-0.006 0h0zM22.718 19.309c-0.031-0.008-0.070-0.017-0.11-0.023l-0.006-0.001-18.546 0.018c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25c0 0 0 0 0.001 0l18.487-0.018c0.020 0.001 0.037 0.012 0.058 0.012 1.902 0 3.443 1.542 3.443 3.443s-1.542 3.443-3.443 3.443c-1.582 0-2.915-1.067-3.318-2.521l-0.006-0.024-0.007-0.015c-0.074-0.267-0.117-0.573-0.118-0.89v-0c0-0.002 0-0.003 0-0.005 0-0.69-0.559-1.25-1.25-1.25s-1.25 0.559-1.25 1.25c0 0.002 0 0.003 0 0.005v-0c0 0.002 0 0.005 0 0.007 0 0.55 0.075 1.082 0.214 1.587l-0.010-0.042c0.005 0.017 0.016 0.029 0.021 0.045 0.717 2.533 3.009 4.357 5.726 4.357 3.281 0 5.941-2.66 5.941-5.941 0-3.241-2.595-5.876-5.821-5.94l-0.006-0z"></path> </g></svg>          </div>
          
          Wind direction:</CardTitle>
        </CardHeader>
        <CardContent>
          {props.windDirection}°
         </CardContent>
        </Card>
       }

        {props.heatIndex && 
        <Card className="bg-gradient-to-r from-slate-600 to-blue-500 sm:p-4 p-2">
          <CardHeader className="sm:pb-2 pb-1">
            <CardTitle className="text-sm sm:text-base flex justify-center items-center">
            <div   className='sm:h-8 sm:w-8' style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: 'auto', // or any specific height
           width: 'auto',  // or any specific width
          }}>
          <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.0007 3C11.0007 3 9.86264 7.5 11.9313 12C14 16.5 13.5 21 13.5 21M18.9313 21C18.9313 21 19.6008 16.5 17.5007 13C15.4007 9.5 16.0007 6 16.0007 6M7.92989 21C7.92989 21 8.5993 16.5 6.49927 13C4.39924 9.5 4.99927 6 4.99927 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>          </div>

            Heat index:</CardTitle>
          </CardHeader>
          <CardContent>
          {props.heatIndex}°C
         </CardContent>
        </Card>
        }


        {props.lastUpdated && 
        <Card  className="bg-gradient-to-r from-slate-600 to-blue-500 sm:p-4 p-2" >
          <CardHeader className="sm:pb-2 pb-1">
            <CardTitle className="text-sm sm:text-base flex justify-center items-center">
            <div   className='sm:h-8 sm:w-8' style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           height: 'auto', // or any specific height
           width: 'auto',  // or any specific width
          }}>
          <svg fill="#000000" width="34px" height="34px" viewBox="0 -3.5 39 39" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>time</title> <path d="M39 12.052l-2 0.021v-2.042c0-1.657-1.344-3-3-3h-31c-1.657 0-3 1.343-3 3v11c0 1.656 1.343 3 3 3h3.979l-0.021 0.938h23.042l-0.021-0.938h4.021c1.656 0 3-1.344 3-3v-2.062h2.041l-0.041-6.917zM36 21.031c0 1.104-0.896 2-2 2h-31c-1.104 0-2-0.896-2-2v-11c0-1.104 0.896-2 2-2h31c1.104 0 2 0.896 2 2v11zM34 9.031h-31c-0.553 0-1 0.447-1 1v11c0 0.553 0.447 1 1 1h31c0.552 0 1-0.447 1-1v-11c0-0.552-0.448-1-1-1zM32.247 12.014l-0.8 0.75h-2.431l-0.68-0.75h3.911zM31.33 15.139l0.35 0.371-0.42 0.371h-2.612l-0.331-0.371 0.4-0.371h2.613zM28.187 12.146l0.679 0.75-0.169 2-0.51 0.47-0.26-0.28 0.26-2.94zM21.697 12.146l0.679 0.75-0.169 2-0.51 0.47-0.26-0.28 0.26-2.94zM24.837 15.139l0.351 0.371-0.421 0.371h-2.609l-0.33-0.371 0.399-0.371h2.61zM11.705 12.146l0.679 0.75-0.175 2-0.505 0.471-0.257-0.28 0.258-2.941zM14.844 15.139l0.351 0.371-0.42 0.371h-2.613l-0.326-0.371 0.399-0.371h2.609zM9.275 12.014l-0.801 0.75h-2.43l-0.68-0.75h3.911zM5.215 12.146l0.68 0.75-0.176 2-0.505 0.471-0.257-0.28 0.258-2.941zM4.882 15.936l0.3-0.289 0.43 0.469-0.168 2.001-0.818 0.75 0.256-2.931zM4.75 19.006l0.82-0.75h2.426l0.669 0.75h-3.915zM8.815 18.865l-0.672-0.749 0.168-2.001 0.511-0.469 0.25 0.289-0.257 2.93zM9.146 15.086l-0.293 0.28-0.435-0.471 0.175-2 0.812-0.75-0.259 2.941zM11.372 15.936l0.3-0.289 0.43 0.469-0.168 2.001-0.818 0.749 0.256-2.93zM11.239 19.006l0.82-0.75h2.427l0.669 0.75h-3.916zM15.305 18.866l-0.67-0.75 0.169-2 0.511-0.47 0.251 0.289-0.261 2.931zM14.965 12.764h-2.43l-0.681-0.75h3.91l-0.799 0.75zM18.575 19.006h-0.75l0.069-0.75h0.75l-0.069 0.75zM19.015 13.928h-0.75l0.070-0.75h0.75l-0.070 0.75zM21.237 19.006l0.81-0.75h2.43l0.67 0.75h-3.91zM25.297 18.865l-0.671-0.749 0.17-2 0.511-0.47 0.25 0.289-0.26 2.93zM24.957 12.764h-2.43l-0.681-0.75h3.91l-0.799 0.75zM27.727 19.006l0.811-0.75h2.43l0.67 0.75h-3.911zM31.787 18.865l-0.672-0.749 0.168-2.001 0.511-0.469 0.25 0.289-0.257 2.93zM32.119 15.086l-0.294 0.28-0.435-0.471 0.176-2 0.812-0.75-0.259 2.941z"></path> </g></svg>          </div>
            
            Last updated:</CardTitle>
          </CardHeader>
          <CardContent>
          {new Date(props.lastUpdated).toLocaleString()}
         </CardContent>
        </Card>
        }
      </div>
    </div>
  );
};

export default GridLayout;