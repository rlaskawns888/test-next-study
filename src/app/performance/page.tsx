'use client'

/**
 * https://vercel.com/blog/how-react-18-improves-application-performance
 */

import React, { useState, useTransition } from "react";
import CityList from "./CityList";

export default function Performance() {
    const [text, setText] = useState("a");
    const [searchQuery, setSearchQuery] = useState(text);
    const [isPending, startTransition] = useTransition();
  
    return (    
        <main>      
            <h1><code>startTransition</code></h1>      
            <input  
                type="text" 
                value={text}
                onChange={(e) => {
                   setText(e.target.value)
                   startTransition(() => {
                      setSearchQuery(e.target.value)
                   })
               }}  />      
            <CityList searchQuery={searchQuery} />    
        </main>  
       );
}