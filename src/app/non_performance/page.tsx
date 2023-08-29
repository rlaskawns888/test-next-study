'use client'

/**
 * https://vercel.com/blog/how-react-18-improves-application-performance
 */

import React, { useEffect, useState } from "react";
import CityList from "./CityList";


export default function nonPerformance() {
    const [text, setText] = useState("a");

    return (
        <main>      
        <h1>Traditional Rendering</h1>      
        
        <input type="text" onChange={(e) => setText(e.target.value) }   />      

        <CityList searchQuery={text} />    
    </main>  
    );
}
