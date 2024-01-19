import React from "react";

export const Notification=({theme,setTheme})=>{
    return(
        <>
           <label><input type="Checkbox"  onChange={(e)=>setTheme(e.target.value)} />  Use Dark Theme </label> 
        </>
    )
}

// useEffect(() => {
//     console.log('start')
//     return () => console.log('end');
//   }, []);