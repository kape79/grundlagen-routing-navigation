"use client"; //Use Hooks

import { useState } from "react";

export const Counter = () => {    // changed to a named export. Prefer named exports. 
    const [count, setCount] = useState(0);
    return (
        <div>
        <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    );
}